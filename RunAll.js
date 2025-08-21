var doGet = function (e) {
  var libName = "foo";

  // Early return for getData action
  if (e && e.parameter && e.parameter.action === "getData") {
    return this[libName].handleRequest(e);
  }

  // Determine funcTres
  var funcTres = e?.parameter["file"];

  // Logging
  if (e && e.parameter["func"]) {
    Logger.log(">>> [MAIN] MAIN WEB APP CLIENT REQUEST: " + JSON.stringify(e));
  } else {
    Logger.log(
      ">>> [MAIN] MAIN WEB APP No e.parameter[" +
        e?.parameter["func"] +
        "] " +
        JSON.stringify(e),
    );
    var argsEd = this[libName].testlt();
    if (typeof this[libName].mis === "function") {
      if (typeof argsEd === "string") {
        e = this[libName].objectOfS(
          ["parameter"],
          [
            [
              ["func", "mis"],
              ["args", argsEd],
            ],
          ],
          functionRegistry.time,
        );
      } else if (typeof argsEd === "object" && argsEd !== null && argsEd.name) {
        if (argsEd.parameters && argsEd.parameters.length > 0) {
          e = this[libName].objectOfS(
            ["parameter"],
            [
              [
                ["func", "mis"],
                ["args", [argsEd.name, ...argsEd.parameters]],
              ],
            ],
            functionRegistry.time,
          );
        } else {
          e = this[libName].objectOfS(
            ["parameter"],
            [
              [
                ["func", "mis"],
                ["args", argsEd.name],
              ],
            ],
            functionRegistry.time,
          );
        }
      } else {
        console.log("Unexpected argsEd type: ", argsEd);
        e = this[libName].objectOfS(
          ["parameter"],
          [
            [
              ["func", "mis"],
              ["args", "Invalid Entry"],
            ],
          ],
          functionRegistry.time,
        );
      }
      Logger.log(">>> [MAIN] MAIN WEB APP's FINAL e: " + JSON.stringify(e));
    }
  }
  Logger.log(
    ">>> [MAIN] MAIN WEB APP's ELAPSED TIME: " +
      functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\ne is !" +
      !e +
      ", = " +
      JSON.stringify(e),
  );

  // Determine templateName (not directly used in the provided template, but good for context)
  let templateName = e.parameter["func"];
  if (e.parameter["func"] === "crmGWI") {
    templateName = "General Work Invoice";
  } else if (e.parameter["func"] === "crmEBI") {
    templateName = "Employee Benefits Inquiry";
  }
  var funcUno = e.parameter["func"];

  console.log("e.parameter['args'] before funcDos:", e.parameter["args"]);
  var funcDos = e.parameter["args"];
  console.log("e.parameter['args'] after funcDos:", e.parameter["args"]);
  // console.log("funcDos:", funcDos);
  var libFunc = funcUno || "renderFile";
  var foobarr = funcDos || ""; // Redundant variable
  var payLoad = {}; // Initialize payload

  // --- BEGIN Refactored payLoad processing ---
  let finalAppLContent = "";
  let iframeSrc =
    "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"; // Default iframe src
  let finalFeedDivContent = "";

  try {
    let rawFuncResult = null;
    if (this[libName] && typeof this[libName][libFunc] === "function") {
      let parsedFuncArgs = [];

      // Check if foobarr is already an array (from internal re-assignment by objectOfS)
      if (Array.isArray(foobarr)) {
        parsedFuncArgs = foobarr; // It's already the array we want
      } else if (typeof foobarr === "string" && foobarr) {
        try {
          parsedFuncArgs = JSON.parse(foobarr);
          if (!Array.isArray(parsedFuncArgs)) {
            parsedFuncArgs = [parsedFuncArgs];
          }
        } catch (jsonError) {
          parsedFuncArgs = [foobarr]; // Treat as a single string argument if not valid JSON
        }
      } else {
        // Handle other cases for foobarr, or it might be null/undefined
        finalArgsForFunction = [];
      }
      rawFuncResult = this[libName][libFunc].apply(this, parsedFuncArgs);
    } else {
      console.error(
        `Error: Function "${libFunc}" not found or not callable in "${libName}".`,
      );
      rawFuncResult = {
        type: "error",
        message: `Function "${libFunc}" not found.`,
      };
    }

    // Helper function to process any value (rawFuncResult or a nested property like .app)
    function processContent(content) {
      if (!content) {
        return { type: "unknown", data: null };
      }

      // Regex for a basic HTTP/HTTPS URL validation
      // This regex is fairly comprehensive for common URLs but can be refined if needed.
      const urlRegex =
        /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/i;

      // 1. Handle UrlFetchApp.HTTPResponse
      if (
        typeof content.getResponseCode === "function" &&
        typeof content.getContentText === "function"
      ) {
        const contentType = content.getHeaders()["Content-Type"] || "";
        const responseText = content.getContentText();

        if (contentType.includes("application/json")) {
          try {
            return { type: "jsonData", data: JSON.parse(responseText) };
          } catch (e) {
            return {
              type: "text",
              data: `Error parsing JSON from URL fetch: ${responseText}`,
            };
          }
        } else if (contentType.includes("text/html")) {
          return { type: "html", data: responseText };
        } else {
          return { type: "text", data: responseText };
        }
      }
      // 2. Handle Google Apps Script HtmlOutput
      else if (typeof content.getContent === "function") {
        return { type: "html", data: content.getContent() };
      }
      // 3. Handle String content (URL, JSON, HTML, or plain text)
      else if (typeof content === "string") {
        // --- MODIFIED: Use Regex for URL check ---
        if (urlRegex.test(content)) {
          return { type: "url", data: content }; // New type "url" for strings
        }
        // --- END MODIFIED ---

        try {
          const parsedJson = JSON.parse(content);
          return { type: "jsonData", data: parsedJson };
        } catch (jsonError) {
          // Not JSON, treat as HTML or plain text
          if (content.trim().startsWith("<") && content.trim().endsWith(">")) {
            // More robust HTML check
            return { type: "html", data: content };
          } else {
            return { type: "text", data: content };
          }
        }
      }
      // 4. Handle Generic Objects
      else if (typeof content === "object" && content !== null) {
        // If the object itself contains structured data you want to directly use
        if (content.html) {
          // If there's an explicit 'html' property
          return { type: "html", data: content.html };
        }
        if (content.url && urlRegex.test(content.url)) {
          // Use regex for object.url as well
          return { type: "url", data: content.url };
        }
        // Add other specific object property checks here if needed
        return { type: "object", data: content }; // Default for other objects
      }
      // 5. Default unknown
      else {
        return { type: "unknown", data: content };
      }
    }

    // Process the main rawFuncResult
    payLoad = processContent(rawFuncResult);

    // If rawFuncResult was an object and it had an 'app' property,
    // we should specifically process that 'app' property as well.
    // This assumes that the 'app' property might override or provide the primary content.
    if (
      rawFuncResult &&
      typeof rawFuncResult === "object" &&
      rawFuncResult.app
    ) {
      console.log("the 'app' property:", rawFuncResult);
      const appProcessed = processContent(rawFuncResult.app);
      // Overwrite payLoad if 'app' property yields more specific or desired content
      // You might want more sophisticated merging here if both rawFuncResult and .app hold valuable distinct data.
      if (
        appProcessed.type !== "unknown" ||
        (appProcessed.data !== null && appProcessed.data !== undefined)
      ) {
        payLoad = appProcessed;
        // Also, if rawFuncResult has a 'link' or 'vApp' property, ensure it's retained if meaningful
        // This part of merging can be tailored to your specific needs if 'link' or 'vApp'
        // represent something distinct from the 'app' content but should still be propagated.
        if (rawFuncResult.link && !payLoad.link) {
          // Only add if payLoad doesn't already have it
          payLoad.link = rawFuncResult.link;
        }
        if (rawFuncResult.index && !payLoad.index) {
          // Only add if payLoad doesn't already have it
          payLoad.index = rawFuncResult.index;
        }
      }
    }

    console.log("payLoad.type === ", payLoad.type);
    console.log("payLoad.data === ", payLoad.data);

    // Now, use the structured 'payLoad' to set the final content variables
    // (This part needs adjustments to handle the new "url" type)
    if (payLoad.type === "html") {
      iframeSrc = payLoad.index; // Assign iframeSrc
      finalAppLContent = payLoad.data;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "url") {
      // --- NEW: Handle "url" type directly ---
      iframeSrc = payLoad.data; // Assign the URL to iframeSrc
      finalAppLContent = `URL provided: <a href="${payLoad.index}" target="_blank">${payLoad.index}</a>`;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "jsonData") {
      iframeSrc = payLoad.index; // Assign iframeSrc
      finalAppLContent = `<pre>${JSON.stringify(payLoad.data, null, 2)}</pre>`;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "text") {
      iframeSrc = payLoad.index; // Assign iframeSrc
      finalAppLContent = payLoad.data;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "object") {
      // Here, if payLoad.data is an object, you need to decide how to display it.
      // It could contain sub-properties you want to render.
      if (payLoad.data.html || payLoad.data.app) {
        finalAppLContent = payLoad.data.html || payLoad.data.app;
        // If the object itself contains a URL, use it for iframeSrc
        iframeSrc = payLoad.data.url || iframeSrc;
      } else if (payLoad.data.url) {
        // If the object explicitly has a 'url' property
        iframeSrc = payLoad.data.url;
        finalAppLContent = `URL provided: <a href="${payLoad.data.index}" target="_blank">${payLoad.data.index}</a>`;
        finalFeedDivContent = `URL provided: <a href="${payLoad.data.link}" target="_blank">${payLoad.data.link}</a>`;
      } else {
        // Default way to display a generic object: stringify it
        iframeSrc = payLoad.data.index; // Assign iframeSrc
        finalAppLContent = `<pre>${JSON.stringify(payLoad.data.app, null, 2)}</pre>`;
        finalFeedDivContent = `URL provided: <a href="${payLoad.data.link}" target="_blank">${payLoad.data.link}</a>`;
      }
    } else if (payLoad.type === "unknown" || payLoad.type === "error") {
      finalAppLContent = `<div>Error: ${payLoad.message || payLoad.data || "Unknown error."}</div>`;
      finalFeedDivContent = `Error: ${payLoad.message || payLoad.data || "Unknown error."}`;
    }
  } catch (error) {
    console.error(`Error during payload processing:`, error);
    finalAppLContent = `<div>Critical Error: ${error.message}</div>`;
    finalFeedDivContent = `Critical Error: ${error.message}`;
    iframeSrc = ""; // Clear iframe on critical error
  }
  // --- END Refactored payLoad processing ---


  var htmlArray = [
    `untitled proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
  ]
    .toString()
    .split(" ");
  var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
  console.log("rndHtml = " + htmlArray[rndHtmlIndex]);
  var rndPage =
    htmlArray[rndHtmlIndex];
  // console.log("index:", index + "\ntres", tres);
  // Simplify args logic:
  // var htmlArg;
  // index !== -1 ? (htmlArg = htmlArray[index]) : (htmlArg = htmlArray[rndHtmlIndex]);
  var htmlDosArg = rndPage; // Default value
  var htmlTresArg = rndPage; // Default value
  if (foobarr) {
    if (Array.isArray(foobarr)) {
          const firstArg = foobarr[0];
          if (htmlArray.includes(firstArg)) {
              var foobarr0Index = htmlArray.findIndex(function (element) {
                return element === firstArg;
              });
            htmlDosArg = htmlArray[foobarr0Index];
          }
    } 
    else if (htmlArray.includes(foobarr)) {
                  var foobarrIndex = htmlArray.findIndex(function (element) {
                    return element === foobarr;
                  });
                  htmlDosArg = htmlArray[foobarrIndex];
    }
  }
  if (funcTres) {
    if (Array.isArray(funcTres)) {
          const firstArg = funcTres[0];
          if (htmlArray.includes(firstArg)) {
              var funcTres0Index = htmlArray.findIndex(function (element) {
                return element === firstArg;
              });
            htmlTresArg = htmlArray[funcTres0Index];
          }
    } 
    else if (htmlArray.includes(funcTres)) {
              var funcTresIndex = htmlArray.findIndex(function (element) {
                return element === funcTres;
              });
              htmlTresArg = htmlArray[funcTresIndex];
    }
  }
  console.log("e {parameter: {func: " + libFunc + "}}");
  const vLen = [83, 94, 97, 99, 101, 103, 136, 132];

  // Final renderTemplate call
  if (
    this[libName] &&
    typeof this[libName][libFunc] === "function"
  ) {
    try {
      if (libFunc === "renderFile") {
        console.log(
          "returning ?func=" +
            libFunc +
            "&args=" +
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ", " + {} + ", " + templateName ||
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ",",
        );
        return this[libName].renderFile(
          foobarr || (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]),
          {},
          "returning ?func=" +
            libFunc +
            "&args=" +
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ", " + {} + ", " + templateName ||
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ",",
        );
      }
      // const result = this[libName][libFunc](foobarr);
      console.log(
        "returning renderTemplate contentApp [" +
          libFunc +
          "].apply(this, [" +
          foobarr ||
          (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
            "]), tupL " +
            (htmlArray[funcTres0Index] || htmlArray[funcTresIndex]) +
            ", e " +
            JSON.stringify(e) +
            " " +
            foobarr ||
          (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]),
      );
      return this[libName].renderTemplate(
        `<!DOCTYPE html>
          <html lang="en">
            <head><base target="_top">
              <meta charset="utf-8">
              <meta name="Subscribe" content="ATL Budget Studio">
              <meta name=viewport content="width=device-width, initial-scale=1">
              <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
              <style>
                body {
                  flex-grow: 1;
                  color:blue;
                  text-decoration:bold;
                  flex-flow: row wrap;
                  grid-column: 1;
                  grid-row: 1;
                  text-align: center;
                  align-content: flex-start;
                  overflow: auto;
                }
              </style>
            </head>
            <body id="JavaScriptDoGet">
              <div id="eObject"><input type="text" id="pageObj" value=""></div>
              <div><?!= renBlob ?></div>
            </body>
          </html>
          <script>




            function serverSide(func, args) {
              return new Promise((resolve, reject) => {
                google.script.run
                  .withSuccessHandler((result) => {
                    resolve(result); // result will be { type: "...", data: "..." }
                    // You would then process 'result' here to update specific parts of your current page
                    // For example, update a div with result.data if result.type is "text" or "html"
                    console.log("Server side call success:", result);
                  })
                  .withFailureHandler((error) => {
                    reject(error);
                    console.error("Server-side call error:", error);
                    alert("Error during server call: " + error.message);
                  })
                  .runBoilerplate(func, args);
              });
            }




            console.log("line 209");
            const currentE = JSON.parse(<?= e ?>);
            console.log("line 210");
            const homePageUrl = <?= homePage ?>;

            
            console.log("line 213");
            console.log("Client-side: Initial doGet event object:",  currentE);
            console.log("Client-side: Home Page URL:", homePageUrl);

            console.log("line 215");
            document.addEventListener("DOMContentLoaded", eRun);


            
            function eRun() {
              console.log("line 218");
              var objUrl = document.getElementById("pageObj");
              console.log("line 220");
              var objDiv = document.getElementById("eObject");
              console.log("line 222");
              let initialArgs = currentE.parameter["args"];
              if (initialArgs !== undefined && initialArgs !== null) {
                if (typeof initialArgs === 'object') {
                  console.log("line 234: creating pretty-printed initialArgs object");
                  objUrl.value = JSON.stringify(initialArgs, null, 0);
                } else {
                  console.log("line 237: falling back to initialArgs string");
                  objUrl.value = initialArgs; // If it's a string directly
                }
              } else {
                console.log("line 241: falling back to empty string");
                objUrl.value = '[""]'; // Default if args is missing
              }


                      
                      objUrl.addEventListener("change", function () {
                        try {
                          // Parse the user's input as the new 'args' value
                          // Allow direct strings or JSON arrays/objects
                          let parsedE;
                          try {
                            parsedE = JSON.parse(this.value);
                          } catch (jsonError) {
                            // If it's not valid JSON, treat it as a plain string
                            parsedE = this.value;
                          }

                          // --- MODIFICATION STARTS HERE ---
                          // Create a *new*, reduced e object containing only func and args
                          const updatedClientE = {
                            parameter: {
                              func: currentE.parameter.func, // Keep the original func
                              args: parsedE                 // Use the new parsed args
                            }
                          };
                          // --- MODIFICATION ENDS HERE ---

                          alert("e.parameter['args'] updated. Sending back to server for re-render.");
                          console.log("Client-side: Updated e object to send:", updatedClientE);


                                  
                                  async function handlePageUpdate() {
                                    try {
                                      // This part is still problematic if newStackContent is meant to be HTML
                                      // and it directly comes from updatedClientApp (which is the textarea value)
                                      // If updatedClientApp contains HTML, it needs to be processed to be displayable.
                                      const newHtmlContent = await serverSide(updatedClientE.parameter["func"], [updatedClientE.parameter["args"]]);
                                      if (newHtmlContent && newHtmlContent.type === "html" && newHtmlContent.data) {
                                        document.open();
                                        document.write(newHtmlContent.data); // Use the data property
                                        document.close();
                                        console.log("Client-side: Page re-rendered with new content from server.");
                                      } 
                                      else if (newHtmlContent && newHtmlContent.type === "object" && newHtmlContent.data) {
                                        document.open();
                                        document.write(newHtmlContent.data.index); // Use the data property
                                        document.close();
                                        console.log("Client-side: Page re-rendered with new content from server.");
                                      } 
                                      else {
                                        document.open();
                                        document.write(newHtmlContent);
                                        document.close();
                                        console.log("Client-side: Page re-rendered with new content from server.");
                                      }
                                    } 
                                    catch (error) {
                                      console.error("Client-side Error during full re-render:", error);
                                      alert("Error re-rendering: " + error.message);
                                    }
                                  }



                          handlePageUpdate();
                        } catch (error) {
                          alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                          console.error("Input processing error:", error);
                        }
                      });



            }



          </script>`,
        {
          renBlob: this[libName].contentApp(
            `<!DOCTYPE html>
            <html lang="en">
              <head>
                <base target="_top">
                <meta charset="utf-8">
                <meta name="Subscribe" content="JavaScript webapp">
                <meta name=viewport content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                <style>
                  body 
                    {
                      flex-grow: 1;color:blue;text-decoration:bold;
                      flex-flow: row wrap;
                      grid-column: 1;grid-row: 1;
                      text-align: center;
                      align-content: flex-start;
                      overflow: auto;
                    };
                </style>
              </head>
              <body id="JavaScript">
                <div class="row">
                  <div id="zeroSize"></div></div>
                <div class="row">
                  <div class="responsive-section">
                    <div class="container">
                      <label id="labSEOC">
                        <strong></strong></label>
                      <div class="row">
                        <div class="col s12 card-panel amber">
                          <div class="responsive-section">
                            <div class="container">
                              <div class="col s12 receipt red">
                                <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                                  <thead></thead>
                                  <tbody>
                                    <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                                      <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                        <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                                          <tbody>
                                            <td>
                                              <div>
                                                <textarea id="indexBeta" spellcheck="false" rows="10" cols="50"></textarea></div><br /></td></tbody></table></td></tr></tbody></table></div></div></div></div></div></div></div></div>
          <script>
            function clientSide(func, args) {
              return new Promise((resolve, reject) => {
                google.script.run
                  .withSuccessHandler((result) => {
                    resolve(result); // result will be { type: "...", data: "..." }
                    // You would then process 'result' here to update specific parts of your current page
                    // For example, update a div with result.data if result.type is "text" or "html"
                    console.log("Server side call success:", result);
                  })
                  .withFailureHandler((error) => {
                    reject(error);
                    console.error("Server-side call error:", error);
                    alert("Error during server call: " + error.message);
                  })
                  .runBoilerplate(func, args);
              });
            }
            console.log("line 367: Beginning <?= appL ?> evaluation");
            // Parse the input as the new value
            // Allow direct strings or JSON arrays/objects
            var lappIsObj = <?= appL["app"] ?>;
            var appLIsObj = <?= appL ?>;
            let initialArgs
            let currentApp
            try {
              currentApp = JSON.parse(lappIsObj) || JSON.parse(appLIsObj)
              console.log("Client-side: Initial WebApp:", lappIsObj + " OR " + appLIsObj);
            } 
            catch (error) {
              // If it's not valid JSON, treat it as a plain string
              if ( typeof lappIsObj === "object" || typeof appLIsObj === "object") {
                currentApp = JSON.stringify(lappIsObj) || JSON.stringify(appLIsObj);
                console.log("Client-side: Initial Object of WebApp:", JSON.stringify(lappIsObj) + " OR " + JSON.stringify(appLIsObj));
              }
              else {
                currentApp = lappIsObj || appLIsObj
                console.log("Client-side: Initial String of WebApp:", lappIsObj + " OR " + appLIsObj);
              }
            }
            const homeStackUrl = <?= homePage ?>
            const chUrl = document.getElementById("indexBeta");
            console.log("line 659 Inside renBlob block of serverside Runall doGet");

            // console.log("Client-side: Home Page URL:", homeStackUrl);

            console.log("line 663 Inside renBlob block of serverside Runall doGet");
            document.addEventListener("DOMContentLoaded", runStack)
                    function runStack() {
                      console.log("line 666 Inside _renBlob block of serverside Runall doGet _runStack(" + currentApp + ")");
                      initialArgs = currentApp
                      if (initialArgs !== undefined && initialArgs !== null) {

                        // If trying to parse JSON on appL["app"] succeeds
                        if (typeof initialArgs === 'object') {
                          console.log("JSON.stringify(" + initialArgs + ")");
                          chUrl.value = JSON.stringify(initialArgs, null, 2);
                        } 

                        // --- 3. if json error, handle String content (URL, JSON, HTML, or plain text)
                        else if (typeof initialArgs === 'object' || typeof initialArgs === 'string') {
                          // --- MODIFIED: Use Regex for URL check ---
                          // Regex for a basic HTTP/HTTPS URL validation
                          // This regex is fairly comprehensive for common URLs but can be refined if needed.
                          // "^https?://(?:www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$"
                          // const urlRegExString = "^https?://(.+?)."
                          // const urlRegEx = new RegExp(urlRegExString);
                          let addr = URL.canParse(lappIsObj) || URL.canParse(appLIsObj);

                          console.log(addr);
                          console.log("line 431 inside _runStack _URL.canParse(" + lappParse || appLParse + ")");

                          if (addr) {

                            console.log('appL["app"] is a URL, navigating to: ' + lappParse || appLParse);
                            window.location.href = lappParse || appLParse; // New type "url" for strings
                            return

                          }
                          // --- END MODIFIED ---

                          try {
                            console.log(initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">"));
                            console.log("line 444 _runStack JSON.parse(" + initialArgs + ")");
                            const parsedJson = JSON.parse(initialArgs);
                            if (parsedJson) {
                              
                              // Convert the JavaScript object into a formatted JSON string
                              console.log("initialArgs is a JSON object, navigating to: ", initialArgs);
                              const jsonString = JSON.stringify(parsedJson, null, 2); 

                              document.open();
                              document.write("<pre>" + jsonString + "</pre>"); // Wrap in <pre> for formatting
                              document.close();
                              
                            }
                          } catch (jsonError) {
                            // Not JSON, treat as HTML or plain text
                            if (initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">")) {
                              // More robust HTML check
                              console.log(initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">"));
                              document.open();
                              document.write(initialArgs);
                              document.close();
                            } else {
                                let appStr = null;
                                  if (typeof initialArgs === "object") {
                                    appStr = JSON.stringify(initialArgs);
                                  } else {
                                    // Escape special characters and wrap in quotes for the HTML template
                                    appStr = JSON.stringify(initialArgs); 
                                  }
                                // const fStr = <?= appL["index"]? appL["index"]["funcStr"]:"null" ?>;
                                // const dStr = <?= appL["index"]? appL["index"]["dataStr"]:"null" ?>;
                                // const indStr = fStr? fStr:dStr;
                                // const combineStr = indStr + " " + appStr
                                console.log("typeof initialArgs === ", typeof initialArgs);
                                chUrl.value = JSON.stringify(appStr, null, 2);
                            }
                          }
                        }
                      } else {
                        chUrl.value = '[""]'; // Default if args is missing
                      }
                              chUrl.addEventListener("change", function() {
                                try {
                                  // Parse the user's input as the new value
                                  // Allow direct strings or JSON arrays/objects
                                  let htmlApp
                                  try {
                                    htmlApp = JSON.parse(this.value);
                                  } 
                                  catch (jsonError) {
                                    // If it's not valid JSON, treat it as a plain string
                                    htmlApp = this.value
                                  }

                                  // --- MODIFICATION STARTS HERE ---
                                  // Create a *new*, reduced e object containing only func and args
                                  const updatedClientApp = htmlApp
                                  // --- MODIFICATION ENDS HERE ---

                                  alert("WebApp updated. Sending back to server for re-render.");
                                  console.log("Client-side: Updated WebApp to send:", updatedClientApp);
                                          async function handleStackUpdate() {
                                            try {
                                              const newStackContent = updatedClientApp
                                              document.open();
                                              document.write(newStackContent);
                                              document.close();
                                              console.log("Client-side: Page re-rendered with new content from server.");
                                            } 
                                            catch (error) {
                                              console.error("Client-side Error during full re-render:", error);
                                              alert("Error re-rendering: " + error.message);
                                            }
                                          }
                                  handleStackUpdate()
                                } catch (error) {
                                  alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                                  console.error("Input processing error:", error);
                                }
                              });
                    }
          </script>
        </body>
      </html>`,
            {
              appL: finalAppLContent,
              tupL: (htmlArray[funcTres0Index] || htmlArray[funcTresIndex]),
              homePage: this[libName].getScriptUrl(),
            },
          ),
          e: JSON.stringify(e),
          homePage: this[libName].getScriptUrl(),
        },

        "returning renderTemplate contentApp [" +
          libFunc +
          "].apply(this, [" +
          (foobarr || (htmlArray[foobarr0Index] || htmlArray[foobarrIndex])) +
          "]), tupL " +
          (htmlArray[funcTres0Index] || htmlArray[funcTresIndex]) +
          ", e " +
          JSON.stringify(e) +
          " " +
          (foobarr || (htmlArray[foobarr0Index] || htmlArray[foobarrIndex])),
      );
    } catch (error) {
      console.error(
        `Error executing function "${libFunc}":`,
        error,
      );
      throw new Error(
        "Error executing function: " + error.toString() + "\n" + error.stack,
      );
    }
  } else {
    return;
  }
};
// const accessGranted
// = this[libName].validateFiles();const youNeedAccess
// = this[libName].scriptQuit();
// try {this[libName].validateFiles()
// ? accessGranted:youNeedAccess;
// if (accessGranted){this[libName].validateFolders()
// ? accessGranted:youNeedAccess;
// if (accessGranted){this[libName].validGroup()
// ? accessGranted :youNeedAccess;
// if (accessGranted) {
// ? console.log(e.parameter["func"] + " funcUno  = " + typeof funcUno)
// : console.error(e.parameter["func"] + " funcUno  = " + typeof funcUno);
// ? console.log(e.parameter["args"] + " funcDos  = " + typeof funcDos)
// : console.error(e.parameter["args"] + " funcDos  = " + typeof funcDos);
// try {
//   var argsEd = this[libName].testlt();
//   if (typeof this[libName].mis === "function") {
//     e = this[libName].objectOfS(
//       ["parameter"],
//       [
//         [
//           ["func", "mis"],
//           ["args", argsEd],
//         ],
//       ],
//       Math.floor(
//         (this[libName].maxTime - (new Date() % (1000 * 60))) / 1000,
//       ),
//     );
//     var result = doGet(e);
//     if (typeof result === "string") {
//       return HtmlService.createHtmlOutput(result);
//     } else {
//       return result;
//     }
//   } else {
//     HtnmlService.createHtmlOutput("Function not found.");
//   }
// } catch (error) {
//   Logger.log("Error in doGet:");
//   console.error("Error in doGet: ", error);
//   return HtmlService.createHtmlOutput(
//     "An error occurred: " + error.message,
//   );
// }
// var titleArray
// = [];for (var key in globalThis) {if (typeof globalThis[key] == "function") {titleArray.push(key);}};var objMaster
// = {miscellaneous: {section: titleArray}}
// ? console.log("objMaster = " + typeof objMaster):console.error("objMaster = " + typeof objMaster);
// // try {return; var wwAccess
// = function(rName,rFunc,rArgs) {const Route
// = {}
// ? console.log(Route+" Route"):console.error(Route+" Route");Route.path
// = function(route, rFunction) {Route[route]
// = rFunction}
// ? console.log(Route[route]+" Route[route]"):console.error(Route[route]+" Route[route]");
// if (this[libName].hasOwnProperty(rFunc)) {var funcS
// = this[libName][rFunc]
// ? console.log(funcS+" funcS"):console.error(funcS+" funcS");
// // Get the actual function
// Route.path(rName, funcS);
// // Associate the function with the route
// const args
// = rArgs
// ? console.log(args+" args"):console.error(args+" args");return Route[rName](args);}
// else {console.error("Invalid function name:", funcUno + ":funcUno - funcDos:" + funcDos);return "Invalid function name"}}}
// catch(error) {return
// // Error handling
// Logger.log("Error in doGet(): " + error);
// // Log the error for debugging (important!)
// // Display an alert to the user (client-side)
// let output
// = ContentService.createTextOutput("<html><body><script>")
// ? console.log("output "+output):console.log(output+" output");output.append("alert('" + error.message + "');");
// // Display the error message in an alert
// output.append("window.location.href = '" + ScriptApp.getService().getUrl() + "';");
// // Redirect back to the app (optional)
// output.append("</script></body></html>");return output.setMimeType(ContentService.MimeType.HTML);}
// var nber
// = this[libName].randNum(arguments.callee.caller.name)
// ? console.log("nber = " + this[libName].randNum(arguments.callee.caller.name)):console.error("nber = " + this[libName].randNum(arguments.callee.caller.name));var appList
// = this[libName].appSort(nber)
// ? console.log("appList + " + this[libName].appSort(nber)):console.error("appList = " + this[libName].appSort(nber));var dropList
// = appList.map((item) => {return "<option>" + item + "</option>"}).join("");var result
// = JSON.stringify(dropList)
// ? console.log("result = " + JSON.stringify(dropList)):console.error("result = " + JSON.stringify(dropList));var appUrl
// = this[libName].getUrl(ScriptApp) + "?func=";
// try {return;
// if (funcDos) {var payload
// = this[libName][funcUno].apply(this, funcDos)
// ? console.log(payload + "payload = " + typeof payload):console.error(payload + "payload = " + typeof payload)}else if (!funcDos && funcUno) {var payload
// = this[libName][funcUno]()
// ? console.log(payload + "payload = " + typeof payload):console.error(payload + "payload = " + typeof payload)}
// }catch(error) {return; console.error(error);return "Error in payload " + error};
// console.log("crmT index of func " + typeof funcUno , funcUno + " of boilerplate:" + this[libName].crmT(funcUno) + " \nmisSt property " + typeof payload + " above args:" + funcDos);try {return;
// if (payload.length === 99 || payload.length ===94 || payload.length === 83 || payload.length ===97 || payload.length ===101 || payload.length ===103 || payload.length ===136 || payload.length ===132 || [payload].indexOf("&entry") > -1) {return this[libName].renderTemplate(this[libName].mis(payload),{},"All departments")}
// else {var foobarr
// = "renderFile";var htmlArray
// = [`index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess`].toString().split(" ");var args
// = htmlArray[htmlArray.indexOf(funcDos)];
// if (args) {return this[libName].renderTemplate(`<!DOCTYPE html><html lang="en"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="ATL Budget Studio"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;};</style></head><body id="JavaScriptDoGet"><div id="pageObj"></div><div><?!= renBlob ?></div></body></html><script>;var objUrl
// = document.getElementById("pageObj");document.addEventListener("DOMContentLoaded", eRun);function eRun() {objUrl.innerHTML
// = <?= JSON.stringify(e) ?>};</script>`, {renBlob: this[libName].contentApp(`<!DOCTYPE html><html lang="en"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="JavaScript webapp"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;};</style></head><body id="JavaScript"><div class="row"><div id="zeroSize"><?!= HtmlService.createTemplateFromFile(tupL).evaluate().getContent() ?></div></div><div class="row"><div class="col s8 l8 m8 card-panel push-m2 push-s2 push-l2"><div class="video-container"><iframe src="" id="indexBeta" style='width:"100%";height:"100%"' allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen></iframe></div></div></div></body></html><script>;var chUrl
// = document.getElementById("indexBeta");var pageUrl
// = document.getElementById("zeroSize");console.log(<?!= appL.length ?>);if (<?!= appL.length  === 99 || appL.length === 94 || appL.length === 83 ?>) {pageUrl.innerHTML
// = "";chUrl.src
// = "<?= appL ?>"}else {chUrl.src
// = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"};</script>`, {appL: this[libName][foobarr].apply(this, [args]),tupL: args}),e:e}, args)}
// else {return this[libName].renderTemplate(`<!DOCTYPE html><html><head><base target="_top"></head><body class="amber"><div class="amber" id="div">${payload}</div></body></html>`,{},"All departments")}}}
// catch(error) {return; var foobarr
// = "renderFile";var htmlArray
// = [`index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess`].toString().split(" ");var args
// = htmlArray[htmlArray.indexOf(funcDos)];
// if (args) {return; return this[libName].renderTemplate(`<!DOCTYPE html><html lang="en"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="ATL Budget Studio"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;};</style></head><body id="JavaScriptDoGet"><div id="pageObj"></div><div><?!= renBlob ?></div></body></html><script>;var objUrl
// = document.getElementById("pageObj");document.addEventListener("DOMContentLoaded", eRun);function eRun() {objUrl.innerHTML
// = <?= JSON.stringify(e) ?>};</script>`, {renBlob: this[libName].contentApp(`<!DOCTYPE html><html lang="en"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="JavaScript webapp"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;};</style></head><body id="JavaScript"><div class="row"><div id="zeroSize"><?!= HtmlService.createTemplateFromFile(tupL).evaluate().getContent() ?></div></div><div class="row"><div class="col s8 l8 m8 card-panel push-m2 push-s2 push-l2"><div class="video-container"><iframe src="" id="indexBeta" style='width:"100%";height:"100%"' allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen></iframe></div></div></div></body></html><script>;var chUrl
// = document.getElementById("indexBeta");var pageUrl
// = document.getElementById("zeroSize");console.log(<?!= appL.length ?>);
// if (<?!= appL.length  === 99 || appL.length === 94 || appL.length === 83 ?>) {pageUrl.innerHTML
// = "";chUrl.src
// = "<?= appL ?>"}
// else {chUrl.src
// = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"};</script>`, {appL: this[libName][foobarr].apply(this, [args]),tupL: args}),e:e}, args)}else {return this[libName].renderTemplate(`<!DOCTYPE html><html><head><base target="_top"></head><body class="amber"><div class="amber" id="div">${payload}</div></body></html>`,{},"All departments")}}}
// else if (!funcUno){//return;
// try {// return;
// var foobarr
// = "renderFile";var htmlArray
// = [`index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess`].toString().split(" ");var args
// = htmlArray[htmlArray.indexOf(funcDos)];
// if (args) {//return;
// return this[libName].renderTemplate(`<!DOCTYPE html><html lang="en"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="ATL Budget Studio"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;};</style></head><body id="JavaScriptDoGet"><div id="pageObj"></div><div><?!= renBlob ?></div></body></html><script>;var objUrl
// = document.getElementById("pageObj");document.addEventListener("DOMContentLoaded", eRun);function eRun() {objUrl.innerHTML
// = <?= JSON.stringify(e) ?>};</script>`, {renBlob: this[libName].contentApp(`<!DOCTYPE html><html lang="en"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="JavaScript webapp"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;};</style></head><body id="JavaScript"><div class="row"><div id="zeroSize"><?!= HtmlService.createTemplateFromFile(tupL).evaluate().getContent() ?></div></div><div class="row"><div class="col s8 l8 m8 card-panel push-m2 push-s2 push-l2"><div class="video-container"><iframe src="" id="indexBeta" style='width:"100%";height:"100%"' allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen></iframe></div></div></div></body></html><script>;var chUrl
// = document.getElementById("indexBeta");var pageUrl
// = document.getElementById("zeroSize");console.log(<?!= appL.length ?>);
// if (<?!= appL.length  === 99 || appL.length === 94 || appL.length === 83 ?>) {pageUrl.innerHTML
// = "";chUrl.src
// = "<?= appL ?>"}
// else {chUrl.src
// = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"};</script>`, {appL: this[libName][foobarr].apply(this, args[Math.floor(Math.random() * (Math.floor(args.length)))]),tupL: args}),e:e}, args)}else {return this[libName].renderTemplate(`<!DOCTYPE html><html><head><base target="_top"></head><body class="amber"><div class="amber" id="div">${payload}</div></body></html>`,{},"All departments")}}
// catch (error) {return; Logger.log("Error in doGet: " + error);return HtmlService.createHtmlOutput("Error: " + error.message);}}
// }else {return "Shared Access Denied"}}
// else {return "Folder Access denied"}}
// else {return "File Permissions Denied"}}
// catch(error){return; this[libName].doGet(e)}
// var runBoilerplate =  function(func, someargs)  {
//   var libName = "foo"
//   console.log(Math.floor((this[libName].maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name + "\nfunc is !" + !func + ", = " + func + "\nsomeargs is !" + !someargs + ", = " + someargs);
//   var libFunc = func || "doGet";
//   args = someargs || [];
//   return this[libName][libFunc].apply(this, args)}

// function runBoilerplate(func, args) {
//   var libName = "foo";
//   console.log(
//     Math.floor((this[libName].maxTime - (new Date() % (1000 * 60))) / 1000) +
//       "\n" +
//       arguments.callee.name +
//       "\nfunc is !" +
//       !func +
//       ", = " +
//       func +
//       "\nargs is !" +
//       !args +
//       ", = " +
//       args,
//   );
//   try {
//     return this[libName][func].apply(this, args); // Use .apply()
//   } catch (error) {
//     Logger.log("Error in " + func + ": " + error);
//     throw error; // Re-throw for client-side catch
//   }
// }

/**
 * Server-side function to receive a new 'e' object from the client
 * and re-render the entire page based on it.
 * @param {GoogleAppsScript.Events.AppsScriptHttpRequestEvent} clientEObject The 'e' object sent from the client, with updated parameters.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} The complete new HTML content wrapped in HtmlOutput.
 */ function runBoilerplate(func, args) {
  Logger.log(
    "Server-side: runBoilerplate called with clientEObject: " +
      JSON.stringify(func, ...args),
  );
  var libName = "foo";
  // Check if maxTime exists as a global variable
  const timeRemaining =
    typeof this[libName].maxTime !== "undefined" &&
    this[libName].maxTime instanceof Date
      ? Math.floor(
          (functionRegistry.maxTime - (new Date().getTime() % (1000 * 60))) /
            1000,
        ) // Use .getTime() for Date objects
      : "N/A"; // Provide a fallback if maxTime is not defined or not a Date

  console.log(
    `Time remaining: ${timeRemaining}` +
      `\nFunction: ${arguments.callee.name}` +
      `\nfunc: ${func}, args: ${JSON.stringify(args)}`,
  );
  try {
    // If 'foo' is still where your functions like 'mis' are, keep this line.
    // However, if your functions like 'mis' are also global (e.g., globalThis.mis),
    // then you might just call them directly or use `this[func]` if `this` refers to the global scope.
    // Based on the logs, 'mis' and 'yahooSort' seem to be global functions.
    let rawResult;
    if (typeof this[libName][func] === "function") {
      rawResult = this[libName][func].apply(this, args); // Call the global function
    } else {
      // Fallback or error if func is not found in globalThis
      throw new Error(
        `Function '${this[libName][func]}' not found in global scope.`,
      );
    }

    // ... (rest of your processing logic for rawResult)
    if (
      rawResult &&
      typeof rawResult.getContent === "function" &&
      typeof rawResult.setXFrameOptionsMode === "function"
    ) {
      return { type: "html", data: rawResult.getContent() };
    } else if (
      rawResult &&
      typeof rawResult.getResponseCode === "function" &&
      typeof rawResult.getContentText === "function"
    ) {
      const contentType = rawResult.getHeaders()["Content-Type"] || "";
      const responseText = rawResult.getContentText();
      if (contentType.includes("application/json")) {
        try {
          return { type: "jsonData", data: JSON.parse(responseText) };
        } catch (e) {
          return {
            type: "text",
            data: `Error parsing JSON from URL fetch: ${responseText}`,
          };
        }
      } else if (contentType.includes("text/html")) {
        return { type: "html", data: responseText };
      } else {
        return { type: "text", data: responseText };
      }
    } else if (typeof rawResult === "string") {
      try {
        const parsedJson = JSON.parse(rawResult);
        return { type: "jsonData", data: parsedJson };
      } catch (jsonError) {
        if (
          rawResult.trim().startsWith("<") &&
          rawResult.trim().endsWith(">")
        ) {
          return { type: "html", data: rawResult };
        } else {
          return { type: "text", data: rawResult };
        }
      }
    } else if (typeof rawResult === "object" && rawResult !== null) {
      if (rawResult.html) {
        return { type: "html", data: rawResult.html };
      }
      if (rawResult.url) {
        return { type: "url", data: rawResult.url };
      }
      return { type: "object", data: rawResult };
    } else {
      return { type: "unknown", data: rawResult };
    }
  } catch (error) {
    Logger.log("Error in " + func + ": " + error.message);
    throw new Error(`Server error in ${func}: ${error.message}`);
  }
}

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};
