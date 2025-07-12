var doGet = function (e) {
  Logger.log(
    ">>> [MAIN] MAIN WEB APP's doGet() called. e: " + JSON.stringify(e),
  );

  var libName = "foo";
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

  // Early return for getData action
  if (e && e.parameter && e.parameter.action === "getData") {
    return this[libName].handleRequest(e);
  }

  // Determine funcTres
  var funcTres = e && e.parameter["file"] ? e.parameter["file"] : "uiAccess";

  // Logging
  if (e && e.parameter["func"]) {
    console.log(JSON.stringify(e));
  } else {
    console.log(
      "No e.parameter[" + e.parameter["func"] + "] " + JSON.stringify(e),
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
      console.log(JSON.stringify(e));
    }
  }
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\ne is !" +
      !e +
      ", = " +
      JSON.stringify(e),
  );
  var funcUno = e.parameter["func"];
  // ? console.log(e.parameter["func"] + " funcUno  = " + typeof funcUno)
  // : console.error(e.parameter["func"] + " funcUno  = " + typeof funcUno);
  console.log("e.parameter['args'] before funcDos:", e.parameter["args"]);
  var funcDos = e.parameter["args"];
  // ? console.log(e.parameter["args"] + " funcDos  = " + typeof funcDos)
  // : console.error(e.parameter["args"] + " funcDos  = " + typeof funcDos);
  console.log("e.parameter['args'] after funcDos:", e.parameter["args"]);
  console.log("funcDos:", funcDos);
  var foobarr = funcUno || "renderFile";
  var htmlArray = [
    `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
  ]
    .toString()
    .split(" ");
  var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
  console.log("rndHtmlIndex = " + htmlArray[rndHtmlIndex]);
  var index = htmlArray.findIndex(function (element) {
    return element === e.parameter["args"];
  });
  var tres = htmlArray.findIndex(function (element) {
    return element === funcTres;
  });
  console.log("index:", index + "\ntres", tres);
  var args;
  index !== -1 ? (args = htmlArray[index]) : (args = htmlArray[rndHtmlIndex]);
  console.log("e {parameter: {func: " + e.parameter["func"] + "}}");
  let templateName = e.parameter["func"];
  if (e.parameter["func"] === "crmGWI") {
    templateName = "General Work Invoice";
  } else if (e.parameter["func"] === "crmEBI") {
    templateName = "Employee Benefits Inquiry";
  }
  if (
    this[libName] &&
    typeof this[libName][e.parameter["func"]] === "function"
  ) {
    try {
      if (e.parameter["func"] === "renderFile") {
        console.log(
          "returning ?func=" +
            e.parameter["func"] +
            "&args=" +
            e.parameter["args"] ||
            args + ", " + {} + ", " + templateName ||
            e.parameter["args"] ||
            args + ",",
        );
        return this[libName].renderFile(
          e.parameter["args"] || args,
          {},
          "returning ?func=" +
            e.parameter["func"] +
            "&args=" +
            e.parameter["args"] ||
            args + ", " + {} + ", " + templateName ||
            e.parameter["args"] ||
            args + ",",
        );
      }
      // const result = this[libName][e.parameter["func"]](e.parameter["args"]);
      console.log(
        "returning renderTemplate contentApp [" +
          foobarr +
          "].apply(this, [" +
          e.parameter["args"] ||
          args +
            "]), tupL " +
            args +
            ", e " +
            JSON.stringify(e) +
            " " +
            e.parameter["args"] ||
          args,
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
            console.log("Client-side: Initial doGet event object:", currentE);
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
                  objUrl.value = JSON.stringify(initialArgs, null, 0);
                } else {
                  objUrl.value = initialArgs; // If it's a string directly
                }
              } else {
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
              </body>
            </html>
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




            // Parse the input as the new value
            // Allow direct strings or JSON arrays/objects
            let currentApp;
            try {
              currentApp = JSON.parse(<?= appL["app"] || appL ?>);
            } 
            catch (jsonError) {
              // If it's not valid JSON, treat it as a plain string
              currentApp = <?= appL["app"] || appL ?>;
            }
            const homeStackUrl = <?= homePage ?>;

            console.log("Client-side: Initial WebApp:", currentApp);
            console.log("Client-side: Home Page URL:", homeStackUrl);

            console.log("line 359");
            document.addEventListener("DOMContentLoaded", runStack);



                    
                    function runStack() {
                      console.log("line 362");
                      var chUrl = document.getElementById("indexBeta");
                      console.log("line 364");
                      let initialArgs = currentApp;
                      if (initialArgs !== undefined && initialArgs !== null) {
                        if (typeof initialArgs === 'object') {
                          chUrl.value = JSON.stringify(initialArgs, null, 2);
                        } else {
                          chUrl.value = initialArgs; // If it's a string directly
                        }
                      } else {
                        chUrl.value = '[""]'; // Default if args is missing
                      }




                              chUrl.addEventListener("change", function () {
                                try {
                                  // Parse the user's input as the new value
                                  // Allow direct strings or JSON arrays/objects
                                  let htmlApp;
                                  try {
                                    htmlApp = JSON.parse(this.value);
                                  } 
                                  catch (jsonError) {
                                    // If it's not valid JSON, treat it as a plain string
                                    htmlApp = this.value;
                                  }

                                  // --- MODIFICATION STARTS HERE ---
                                  // Create a *new*, reduced e object containing only func and args
                                  const updatedClientApp = htmlApp;
                                  // --- MODIFICATION ENDS HERE ---

                                  alert("WebApp updated. Sending back to server for re-render.");
                                  console.log("Client-side: Updated WebApp to send:", updatedClientApp);




                                          async function handleStackUpdate() {
                                            try {
                                              const newStackContent = updatedClientApp;
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



                                          
                                  handleStackUpdate();
                                } catch (error) {
                                  alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                                  console.error("Input processing error:", error);
                                }
                              });



                              
                    }
          </script>`,
            {
              appL: this[libName][foobarr].apply(this, [
                e.parameter["args"] || args,
              ]),
              tupL: htmlArray[tres] || args,
              homePage: this[libName].getScriptUrl(),
            },
          ),
          e: JSON.stringify(e),
          homePage: this[libName].getScriptUrl(),
        },

        "returning renderTemplate contentApp [" +
          foobarr +
          "].apply(this, [" +
          (e.parameter["args"] || args) +
          "]), tupL " +
          (htmlArray[tres] || args) +
          ", e " +
          JSON.stringify(e) +
          " " +
          (e.parameter["args"] || args),
      );
    } catch (error) {
      console.error(
        `Error executing function "${e.parameter["func"]}":`,
        error,
      );
      return "Error executing function.";
    }
  } else {
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
    return;
  }
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
};

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
