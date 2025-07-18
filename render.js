const functionRegistry = {
  fileList: [],
  paramsList: [],
  initialize: function () {
    for (const key in globalThis) {
      if (typeof globalThis[key] === "function") {
        this.fileList.push(key);
        try {
          const funcString = globalThis[key].toString();
          const params = funcString
            .substring(funcString.indexOf("(") + 1, funcString.indexOf(")"))
            .split(",")
            .map((param) => param.trim())
            .filter((param) => param !== "");
          this.paramsList.push({ name: key, parameters: params });
        } catch (e) {
          Logger.log(`Error processing function: ${key}. Error: ${e}`);
          this.paramsList.push({
            name: key,
            parameters: ["(Unable to parse)"],
          });
        }
      }
    }
  },
  getFileList: function () {
    return this.fileList;
  },
  getParamsList: function () {
    return this.paramsList;
  },
  maxTime: 6 * 60 * 1000,
  _startTime: null,       // Private variable to store the timestamp when the process begins

  /**
   * Starts the global timer for your process.
   * This should be called only ONCE at the beginning of your main execution.
   */
  startProcessTimer: function() {
    if (this._startTime === null) {
      this._startTime = new Date().getTime();
      console.log("Process timer started at:", new Date(this._startTime).toISOString());
    } else {
      console.warn("Process timer has already started. Call resetProcessTimer() if you want to restart.");
    }
  },

  /**
   * Resets the global timer. Call this if you want to start a completely new execution cycle.
   */
  resetProcessTimer: function() {
    this._startTime = null;
    console.log("Process timer reset.");
  },

  /**
   * Get the elapsed time since the process started.
   * Returns 0 if the timer hasn't been started.
   * @returns {number} Elapsed time in milliseconds.
   */
  get time() {
    if (this._startTime === null) {
      return 0;
    }
    return new Date().getTime() - this._startTime;
  },

  /**
   * Get the time remaining until the 'maxTime' timeout is reached.
   * Returns 'maxTime' if the timer hasn't been started.
   * Ensures the returned value is not negative.
   * @returns {number} Time left to execute in milliseconds.
   */
  get timeLeftToExecute() {
    if (this._startTime === null) {
      return this.maxTime; // Full time remaining if not started
    }
    const elapsed = this.time;
    const remaining = this.maxTime - elapsed;
    return Math.max(0, remaining); // Ensure remaining time doesn't go below zero
  },

  /**
   * Helper to get elapsed time in seconds for easier readability.
   * @returns {number} Elapsed time in seconds.
   */
  get elapsedTimeInSeconds() {
    return Math.floor(this.time / 1000);
  },

  /**
   * Helper to get time left in seconds for easier readability.
   * @returns {number} Time left in seconds.
   */
  get timeLeftInSeconds() {
    return Math.floor(this.timeLeftToExecute / 1000);
  },

  // get time() {
  //   return Math.floor(
  //     (this.maxTime - (new Date().getTime() % (1000 * 60))) / 1000,
  //   );
  // },
};

// Set some global variables
functionRegistry.initialize();
functionRegistry.startProcessTimer();

var renderFile = function (file, argsObject, title) {
  try {
    if (file) {
      const tmp = HtmlService.createTemplateFromFile(file);
      if (argsObject) {
        const keys = Object.keys(argsObject);
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
        });
      }

      // tmp["list"] = htmlListArray;
      // END IF
      // Route[file] = argsObject
      // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url)
      var funcCheck = appList();
      var schedule = foo.dateTime(new Date());
      var html = foo.contentApp(
        `<!DOCTYPE html>
      <html lang="en">
        <head>
          <base target="_top">
          <meta charset="UTF-8">
          <meta name="renderTemplate" content="Developer Render File">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <meta name="contentApp" content="conveyance, power, authority, measured, assessed, subjective, interpretation, understanding, complex, phenomena, Social, Influence, beliefs, attitudes, behaviors, surveys, observations, social, science, research, methods, Compliance, Obedience, directives, Visible, Demonstrations, commands, decisions, resources, enforcing, rules, evidence, exercise, Contextual, Dependence, effectiveness, political, cultural, environment, Qualitative, Aspects, impact, involves, factors, respect, legitimacy, consent, difficult, quantify, precisely, Subjectivity, concepts, single, universally, agreed-upon, definition, constitutes, individuals, involved, values, observer">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
          <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>
          <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>
          <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
          <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>
          <style>
            * {box-sizing: border-box;margin: 0;
              padding: 0;font-family: "Roboto", sans-serif;}
            html,
            body {height: 100%;}
            main {height: 92%;
                  margin-top: 10px;}
            body {background-color: #ffc107;}
            header {background-color: rgba(255,255,255,.1);
                    color: #a7e1ee;
                    font-size: smaller;}
            header h1 {font-family: "Montserrat", cursive;
                      margin-left: 15px;}
            .grid {display: grid;}
            .flex-row {display: flex;
                      flex-direction: row;}
            .flex-column {display: flex;
                          flex-direction: column;}
            .order,
            .menu-payment {border: solid .5px;
                          border-radius: 10px;
                          margin: 0px 10px 5px 10px;
                          height: 100%;
                          max-height: 100%;}
            /* -----------------------------------ORDER--------------------------- */
            .order {background-color: white;
                    flex: 0 0 440px;
                    overflow: auto;}
            .receipt {border: solid .5px;
                      margin: 10px 15px 5px 15px;
                      box-shadow: 3px 3px 2px rgb(3,3,3);
                      user-select: none;
                      flex-grow: 1;}
            .receipt,
            .company-info,
            .receipt-footer {align-items: center;}
            .company-info {margin-top: 5px;}
            #company-name {font-size: 1.5rem;}
            #company-phone {font-size: 1.25rem;}
            th.description {width: 180px;
                            text-align: left;}
            th.price {width: 75px;}
            .quantity,
            .price,
            .subtotal,
            .delete {text-align: right;}
            .receipt-details {margin-top: 10px;
                              flex-grow: 1;}
            .dotted-border {border-bottom: dotted 2px;}
            .fa-trash-can:hover {transform: scale(1.2);}
            table.summary-table {text-align: right;}
            tbody.summary-table td:nth-child(1) {width: 277px;}
            tbody.summary-table td:nth-child(2) {width: 75px;}
            tbody.summary-table td:nth-child(3) {width: 25px;}
            .receipt-footer {padding-top: 20px;}
            #barcode {font-family: "Libre Barcode 128", cursive;
                      font-size: 70px;
                      margin-top: 10px;}
            .toolbar {flex: 0 0 60px;
                      justify-content: space-around;
                      align-items: center;
                      border: solid .5px;
                      border-radius: 10px;
                      margin: 0px 15px 5px 15px;}
            .toolbar-icon {font-size: 2rem;}
            .toolbar-icon:hover {transform: scale(1.2);}
            /* ----------------------------Menu-Payment-------------------------- */
            .menu-payment {background: rgba(255, 255, 255, .05);
                          flex-grow: 1;
                          z-index: 0;}
            .menu {flex-flow: row wrap;
                  grid-column: 1;
                  grid-row: 1;
                  align-content: flex-start;
                  z-index: 0;
                  height: 100%;
                  overflow: auto;}
            .menu-item {flex-flow: 
                      column nowrap;
                      flex-basis: auto;
                      flex-shrink: 0;
                      margin: 5px;
                      background: rgba(255, 255, 255, .05);
                      width: 150px;}
            .menu-img {border-radius: 50%;
                      max-width: 100%;
                      height: auto;
                      display: block;
                      margin: auto;}
            figcaption {color: white;
                        text-align: center;
                        user-select: none;}
            .menu-item:hover>.menu-img {transform: scale(1.03);}
            img {width: 160px;}
          </style>
        </head>
        <body id="renderFile">
          <div><p>
            <div>
                <p>Is the conveyance of power and authority an objective, measurable quantity?</p>
              <br />
                <i>No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:</i>
              <br />
              <br />
            </div>
            <div>
                <p style="text-align: left">Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
              <br />
                <p style="text-align: left">Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
              <br />
                <p style="text-align: left">Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
              <br />
            </div>
            <div>
                <i>However, there are some aspects that can be measured or assessed to some degree:</i>
              <br />
              <br />
            </div>
            <div>
                <p style="text-align: left">Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
              <br />
                <p style="text-align: left">Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
              <br />
                <p style="text-align: left">Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
              <br />
            </div>
            <div>
                <p style="text-align: left">In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.</p>
              <br />
            </div>
          </p></div><br />
          <? var invArray = ["group bank semi fact bio science block chain space coin"] ?>
          <? var calcArray = ["0 1 2 3 4 5 6 7 8 9"].toString().split(" ") ?>
          <? var epaArray = ["ethyl zole zime anol hane leum ther ide ine"].toString().split(" ") ?>
          <? var shopArray = ["1 2 3 4 5"].toString().split(" ") ?>
          <? var meArray = ["by Dontime Life Services"].toString().split(" ") ?>
          <? var invArray = ["group bank semi fact bio science block chain space coin"].toString().split(" ") ?>
          <?  var irResearch = invArray[Math.floor(Math.random() * Math.floor(invArray.length))] ?>
          <? var calcRes = JSON.stringify(Math.floor(Math.random() * Math.floor(calcArray.length))) ?>
          <? var epaResearch = epaArray[Math.floor(Math.random() * Math.floor(epaArray.length))] ?>
          <? var shopResearch = shopArray[Math.floor(Math.random() * Math.floor(shopArray.length))] ?>
          <? var aboutMeSearch = meArray[Math.floor(Math.random() * Math.floor(meArray.length))] ?>
            <label id="labAMD">
              <strong>Research</strong>
            </label>
          <div id="aboutmediv"></div>
            <label id="labSSD">
              <strong>Research</strong>
            </label>
          <div id="shopstorediv"></div>
            <label id="labSED">
              <strong>Research</strong>
            </label>
          <div id="secenvdiv"></div>
            <label id="labCD">
              <strong>Research</strong>
            </label>
          <div id="calculatediv"></div>
            <label id="labID">
              <strong>Research</strong>
            </label>
          <div id="investdiv"></div>
            <label id="labRND">
              <strong>Research</strong>
            </label>
          <div id="rndnewdiv"></div>
            <label id="labSEOC">
              <strong>Research</strong>
            </label>
          <script>
            function serverside(func, args) {
              return new Promise((resolve, reject) => {
                google.script.run
              .withSuccessHandler((result) => {
                resolve(result)})
              .withFailureHandler((error) => {
                console.log(error)
                reject(error)})
              .runBoilerplate(func, args)})};
            const results = document.getElementById("w3Search");
            const ruleBar = document.getElementById("username");
            document.addEventListener("DOMContentLoaded", () => {
              homeW3()
              aboutMeSearch()
              shopResearch()
              secResearch()
              calcResearch()
              investResearch()
              newResearch()}) 
            function homeW3() {
              const strValue = results.value
              results.addEventListener("change",(e) => {
                var cap = e.target.value
                results.value = ""
                document.getElementById("labSEOC").innerTEXT = "... waiting for " + cap
                serverside("portBing", cap)
                .then((vid) => {
                  if (vid) {
                    document.getElementById("w3Res").src = vid}})
                .catch((er) => {
                    console.log(er)
                    document.getElementById("labSEOC").innerHTML = JSON.stringify(er)})})}
            function aboutMeSearch() {
              serverside("rndCoin")
              .then((search) => {
                document.getElementById("aboutmediv").innerHTML = search})
              .catch((err) => {
                console.log(err)
                document.getElementById("labAMD").innerText = JSON.stringify(er)})}
            function shopResearch() {
              serverside("dtlsStore")
              .then((search) => {
                document.getElementById("shopstorediv").innerHTML = search})
              .catch((err) => {
                console.log(err)
                document.getElementById("labSSD").innerText = JSON.stringify(er)})}
            function secResearch() {
              serverside("rndCoin")
              .then((search) => {
                document.getElementById("secenvdiv").innerHTML = search})
              .catch((err) => {
                console.log(err)
                document.getElementById("labSED").innerText = JSON.stringify(er)})}
            function calcResearch() {
              serverside("breakthrough")
              .then((search) => {
                document.getElementById("calculatediv").innerHTML = search})
              .catch((err) => {
                console.log(err)
                document.getElementById("labCD").innerText = JSON.stringify(er)})}
            function investResearch() {
              serverside("rndCoin")
              .then((search) => {
                document.getElementById("investdiv").innerHTML = search})
              .catch((err) => {
                console.log(err)
                document.getElementById("labID").innerText = JSON.stringify(er)})}
            function newResearch() {
              var bar = ruleBar.value
              serverside("generalWorkInvoice", [bar])
              .then((search) => {
                document.getElementById("rndnewdiv").innerHTML = search})
              .catch((error) => {
                console.log(error)
                document.getElementById("labRND").innerText = JSON.stringify(er)})}
          </script>
          <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
          <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
          <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        </body>
      </html>`,
        {
          funcClicked: function () {
            //console.log(document.getElementById("test").innerHTML)
            // Init a timeout variable to be used below
            let timeout = null;
            (() => {
              // Clear the timeout if it has already been set.
              // This will prevent the previous task from executing
              // if it has been less than <MILLISECONDS>
              // clearTimeout(timeout);
              // Make a new timeout set to go off in 1000ms (1 second)
              // timeout = setTimeout
              // (function  ()
              // {console.log('Input Value:', textInput.value);}, 5000)();
              if (typeof url === "undefined") {
                var urlData = document.getElementById("url").value;
                var url = urlData.toString();
              }
              var func = document.getElementById("func").value;
              var args = document.getElementById("args").value;
              if (typeof args !== "undefined") {
                var linkFollow = document.createElement("a");
                linkFollow.href =
                  url +
                  "?func=" +
                  encodeURIComponent(func) +
                  "&args=" +
                  encodeURIComponent(args);
                linkFollow.id = "linkFOLLOW";
                linkFollow.target = "_top";
                document.body.appendChild(linkFollow);
                document.getElementById("linkFOLLOW").click();
                document.getElementById("linkFOLLOW").remove();
              }
            })();
          },
          argsClicked: function () {
            //console.log(document.getElementById("test").innerHTML)
            // Init a timeout variable to be used below
            let timeout = null;
            (() => {
              // Clear the timeout if it has already been set.
              // This will prevent the previous task from executing
              // if it has been less than <MILLISECONDS>
              // clearTimeout(timeout);
              // Make a new timeout set to go off in 1000ms (1 second)
              // timeout = setTimeout
              // (function  ()
              // {console.log('Input Value:', textInput.value);}, 5000)();
              if (typeof url === "undefined") {
                var urlData = document.getElementById("url").value;
                var url = urlData.toString();
              }
              var func = document.getElementById("func").value;
              var args = document.getElementById("args").value;
              if (typeof func !== "undefined") {
                var linkFollow = document.createElement("a");
                linkFollow.href =
                  url +
                  "?func=" +
                  encodeURIComponent(func) +
                  "&args=" +
                  encodeURIComponent(args);
                linkFollow.id = "linkFOLLOW";
                linkFollow.target = "_top";
                document.body.appendChild(linkFollow);
                document.getElementById("linkFOLLOW").click();
                document.getElementById("linkFOLLOW").click();
              }
            })();
          },
        },
      );
      return tmp
        .evaluate()
        .append(html)
        .append(schedule)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setTitle(title);
    } else {
      return foo.handleRequest(argsObject);
    }
  } catch (error) {
    console.log("error in renderTemplate: " + error);
    return "Error rendering template.";
  }
};

var renderTemplate = function (blob, argsObject, title) {
  try {
    const tmp = HtmlService.createTemplate(blob);
    if (argsObject) {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
    }
    var funcCheck = appList();
    var schedule = foo.dateTime(new Date());
    // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url)
    var html = foo.contentApp(
      `<!DOCTYPE html>
    <html lang="en">
      <head>
        <base target="_top">
        <meta charset="UTF-8">
        <meta name="renderTemplate" content="Developer Render Template">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <meta name="contentApp" content="conveyance, power, authority, measured, assessed, subjective, interpretation, understanding, complex, phenomena, Social, Influence, beliefs, attitudes, behaviors, surveys, observations, social, science, research, methods, Compliance, Obedience, directives, Visible, Demonstrations, commands, decisions, resources, enforcing, rules, evidence, exercise, Contextual, Dependence, effectiveness, political, cultural, environment, Qualitative, Aspects, impact, involves, factors, respect, legitimacy, consent, difficult, quantify, precisely, Subjectivity, concepts, single, universally, agreed-upon, definition, constitutes, individuals, involved, values, observer">
        <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>
        <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>
        <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
        <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>
        <style>
          * {box-sizing: border-box;margin: 0;
            padding: 0;font-family: "Roboto", sans-serif;}
          html,
          body {height: 100%;}
          main {height: 92%;
                margin-top: 10px;}
          body {background-color: #ffc107;}
          header {background-color: rgba(255,255,255,.1);
                  color: #a7e1ee;
                  font-size: smaller;}
          header h1 {font-family: "Montserrat", cursive;
                    margin-left: 15px;}
          .grid {display: grid;}
          .flex-row {display: flex;
                    flex-direction: row;}
          .flex-column {display: flex;
                        flex-direction: column;}
          .order,
          .menu-payment {border: solid .5px;
                        border-radius: 10px;
                        margin: 0px 10px 5px 10px;
                        height: 100%;
                        max-height: 100%;}
          /* -----------------------------------ORDER--------------------------- */
          .order {background-color: white;
                  flex: 0 0 440px;
                  overflow: auto;}
          .receipt {border: solid .5px;
                    margin: 10px 15px 5px 15px;
                    box-shadow: 3px 3px 2px rgb(3,3,3);
                    user-select: none;
                    flex-grow: 1;}
          .receipt,
          .company-info,
          .receipt-footer {align-items: center;}
          .company-info {margin-top: 5px;}
          #company-name {font-size: 1.5rem;}
          #company-phone {font-size: 1.25rem;}
          th.description {width: 180px;
                          text-align: left;}
          th.price {width: 75px;}
          .quantity,
          .price,
          .subtotal,
          .delete {text-align: right;}
          .receipt-details {margin-top: 10px;
                            flex-grow: 1;}
          .dotted-border {border-bottom: dotted 2px;}
          .fa-trash-can:hover {transform: scale(1.2);}
          table.summary-table {text-align: right;}
          tbody.summary-table td:nth-child(1) {width: 277px;}
          tbody.summary-table td:nth-child(2) {width: 75px;}
          tbody.summary-table td:nth-child(3) {width: 25px;}
          .receipt-footer {padding-top: 20px;}
          #barcode {font-family: "Libre Barcode 128", cursive;
                    font-size: 70px;
                    margin-top: 10px;}
          .toolbar {flex: 0 0 60px;
                    justify-content: space-around;
                    align-items: center;
                    border: solid .5px;
                    border-radius: 10px;
                    margin: 0px 15px 5px 15px;}
          .toolbar-icon {font-size: 2rem;}
          .toolbar-icon:hover {transform: scale(1.2);}
          /* ----------------------------Menu-Payment-------------------------- */
          .menu-payment {background: rgba(255, 255, 255, .05);
                        flex-grow: 1;
                        z-index: 0;}
          .menu {flex-flow: row wrap;
                grid-column: 1;
                grid-row: 1;
                align-content: flex-start;
                z-index: 0;
                height: 100%;
                overflow: auto;}
          .menu-item {flex-flow: 
                    column nowrap;
                    flex-basis: auto;
                    flex-shrink: 0;
                    margin: 5px;
                    background: rgba(255, 255, 255, .05);
                    width: 150px;}
          .menu-img {border-radius: 50%;
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin: auto;}
          figcaption {color: white;
                      text-align: center;
                      user-select: none;}
          .menu-item:hover>.menu-img {transform: scale(1.03);}
          img {width: 160px;}
        </style>
      </head>
      <body id="renderTemplate">
        <div><p>
          <div>
              <p>Is the conveyance of power and authority an objective, measurable quantity?</p>
            <br />
              <i>No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:</i>
            <br />
            <br />
          </div>
          <div>
              <p style="text-align: left">Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
            <br />
              <p style="text-align: left">Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
            <br />
              <p style="text-align: left">Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
            <br />
          </div>
          <div>
              <i>However, there are some aspects that can be measured or assessed to some degree:</i>
            <br />
            <br />
          </div>
          <div>
              <p style="text-align: left">Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
            <br />
              <p style="text-align: left">Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
            <br />
              <p style="text-align: left">Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
            <br />
          </div>
          <div>
              <p style="text-align: left">In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.</p>
            <br />
          </div>
        </p></div><br />
        <? var invArray = ["group bank semi fact bio science block chain space coin"] ?>
        <? var calcArray = ["0 1 2 3 4 5 6 7 8 9"].toString().split(" ") ?>
        <? var epaArray = ["ethyl zole zime anol hane leum ther ide ine"].toString().split(" ") ?>
        <? var shopArray = ["1 2 3 4 5"].toString().split(" ") ?>
        <? var meArray = ["by Dontime Life Services"].toString().split(" ") ?>
        <? var invArray = ["group bank semi fact bio science block chain space coin"].toString().split(" ") ?>
        <?  var irResearch = invArray[Math.floor(Math.random() * Math.floor(invArray.length))] ?>
        <? var calcRes = JSON.stringify(Math.floor(Math.random() * Math.floor(calcArray.length))) ?>
        <? var epaResearch = epaArray[Math.floor(Math.random() * Math.floor(epaArray.length))] ?>
        <? var shopResearch = shopArray[Math.floor(Math.random() * Math.floor(shopArray.length))] ?>
        <? var aboutMeSearch = meArray[Math.floor(Math.random() * Math.floor(meArray.length))] ?>
          <label id="labAMD">
            <strong>Research</strong>
          </label>
        <div id="aboutmediv"></div>
          <label id="labSSD">
            <strong>Research</strong>
          </label>
        <div id="shopstorediv"></div>
          <label id="labSED">
            <strong>Research</strong>
          </label>
        <div id="secenvdiv"></div>
          <label id="labCD">
            <strong>Research</strong>
          </label>
        <div id="calculatediv"></div>
          <label id="labID">
            <strong>Research</strong>
          </label>
        <div id="investdiv"></div>
          <label id="labRND">
            <strong>Research</strong>
          </label>
        <div id="rndnewdiv"></div>
          <label id="labSEOC">
            <strong>Research</strong>
          </label>
        <script>
          function serverside(func, args) {
            return new Promise((resolve, reject) => {
              google.script.run
            .withSuccessHandler((result) => {
              resolve(result)})
            .withFailureHandler((error) => {
              console.log(error)
              reject(error)})
            .runBoilerplate(func, args)})};
          const results = document.getElementById("w3Search");
          const ruleBar = document.getElementById("username");
          document.addEventListener("DOMContentLoaded", () => {
            homeW3()
            aboutMeSearch()
            shopResearch()
            secResearch()
            calcResearch()
            investResearch()
            newResearch()}) 
          function homeW3() {
            const strValue = results.value
            results.addEventListener("change",(e) => {
              var cap = e.target.value
              results.value = ""
              document.getElementById("labSEOC").innerTEXT = "... waiting for " + cap
              serverside("portBing", cap)
              .then((vid) => {
                if (vid) {
                  document.getElementById("w3Res").src = vid}})
              .catch((er) => {
                  console.log(er)
                  document.getElementById("labSEOC").innerHTML = JSON.stringify(er)})})}
          function aboutMeSearch() {
            serverside("rndCoin")
            .then((search) => {
              document.getElementById("aboutmediv").innerHTML = search})
            .catch((err) => {
              console.log(err)
              document.getElementById("labAMD").innerText = JSON.stringify(er)})}
          function shopResearch() {
            serverside("dtlsStore")
            .then((search) => {
              document.getElementById("shopstorediv").innerHTML = search})
            .catch((err) => {
              console.log(err)
              document.getElementById("labSSD").innerText = JSON.stringify(er)})}
          function secResearch() {
            serverside("rndCoin")
            .then((search) => {
              document.getElementById("secenvdiv").innerHTML = search})
            .catch((err) => {
              console.log(err)
              document.getElementById("labSED").innerText = JSON.stringify(er)})}
          function calcResearch() {
            serverside("breakthrough")
            .then((search) => {
              document.getElementById("calculatediv").innerHTML = search})
            .catch((err) => {
              console.log(err)
              document.getElementById("labCD").innerText = JSON.stringify(er)})}
          function investResearch() {
            serverside("rndCoin")
            .then((search) => {
              document.getElementById("investdiv").innerHTML = search})
            .catch((err) => {
              console.log(err)
              document.getElementById("labID").innerText = JSON.stringify(er)})}
          function newResearch() {
            var bar = ruleBar.value
            serverside("generalWorkInvoice", [bar])
            .then((search) => {
              document.getElementById("rndnewdiv").innerHTML = search})
            .catch((error) => {
              console.log(error)
              document.getElementById("labRND").innerText = JSON.stringify(er)})}
        </script>
        <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
        <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
      </body>
    </html>`,
      {
        funcClicked: function () {
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            // clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            // timeout = setTimeout
            // (function  ()
            // {console.log('Input Value:', textInput.value);}, 5000)();
            if (typeof url === "undefined") {
              var urlData = document.getElementById("url").value;
              var url = urlData.toString();
            }
            var func = document.getElementById("func").value;
            var args = document.getElementById("args").value;
            if (typeof args !== "undefined") {
              var linkFollow = document.createElement("a");
              linkFollow.href =
                url +
                "?func=" +
                encodeURIComponent(func) +
                "&args=" +
                encodeURIComponent(args);
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_top";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").remove();
            }
          })();
        },
        argsClicked: function () {
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            // clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            // timeout = setTimeout
            // (function  ()
            // {console.log('Input Value:', textInput.value);}, 5000)();
            if (typeof url === "undefined") {
              var urlData = document.getElementById("url").value;
              var url = urlData.toString();
            }
            var func = document.getElementById("func").value;
            var args = document.getElementById("args").value;
            if (typeof func !== "undefined") {
              var linkFollow = document.createElement("a");
              linkFollow.href =
                url +
                "?func=" +
                encodeURIComponent(func) +
                "&args=" +
                encodeURIComponent(args);
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_top";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").click();
            }
          })();
        },
      },
    );
    return tmp
      .evaluate()
      .append(html)
      .append(schedule)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setTitle(title);
  } catch (error) {
    console.log("error in renderTemplate: " + error);
    return "Error rendering template.";
  }
}; // or throw error.

var appList = function (e) {
  return HtmlService.createTemplate(
    `
  <html id="appList">
    <head>
      <base target="_top">
      <meta charset="utf-8">
      <meta name="appList" content="Developer Function List">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
    </head>
    <body>
    <? var appList = foo.appSort(9) ?>
    <? var dropList = appList.map((item) => {
        return "<option>" + item + "</option>"

    }).join("") ?>
    <? var result = JSON.stringify(dropList) ?>
    <? var appUrl = foo.getUrl(ScriptApp) + "?func=" ?>
    <nav>
      <div class="row">
        <div class="col s10 card-panel l12 m12 push-s1">
          <div class="z-depth-5 green toolbar_icon toolbar_iconHover container">
            <div class="col s12 l12 m12">
              <div class="black" id="seoData">
                <div class="row">
                  <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
                    <div class="container row valign-wrapper"><?!= foo.rule() ?></div>
                      <div id="indexDiv" class="video-container grey flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
                        <div class="col s10 l10 m10 receipt black darken-1">
                          <iframe 
                            class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
                            src=""
                            id="indexRes"
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            allow="encrypted-media"
                            title="Dontime Life Website"
                            frameborder="0"
                            allowfullscreen
                            ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s10 card-panel l12 m12 push-s1">
                    <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container">
                      <div class="col s12 l12 m12">
                        <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="homeIndex"  type="search" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
      <div class="row">
        <div class="col s12 m12 l12 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
          <div class="container">
            <div class="col s12 m12 l12 receipt nav-wrapper deep-purple darken-1">
              <div class="agenda z-depth-5 btn-large card-panel blue scale-out scale-in receipt">
                <span>
                  <input placeholder="Your Search Here Ex. apple,orange..." class="flow-text menu-img z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in receipt btn-large" id="uiApp" type="search"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script>

        document.addEventListener("DOMContentLoaded", homeChange) 
        function homeChange() {
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler((result) => {
                resolve(result)})
            .withFailureHandler((error) => {
                console.log(error)
                console.log(document.getElementById("test").innerHTML)
                reject(error)})
            .runBoilerplate([func], [args])})};
          
          const htmlStructure = document.getElementById("indexDiv").innerHTML
          const results = document.getElementById("homeIndex")
          const strValue = results.value
          if (!strValue) {

            document.getElementById("indexDiv").innerHTML = "... Loading"
            serverside("dtlsPict")
            .then((stream) => {

              if (stream) {

                document.getElementById("indexDiv").innerHTML = htmlStructure
                document.getElementById("indexRes").src = stream

              }
              else {

                document.getElementById("indexDiv").innerHTML =  JSON.stringify(er)

              }

            })
            .catch((er) => {

              console.log(er)
              document.getElementById("indexDiv").innerHTML = JSON.stringify(er)

            })

          }
          results.addEventListener("change",(e) => 
          {

              var cap = e.target.value
              document.getElementById("homeIndex").value = ""
              document.getElementById("indexDiv").innerHTML = "... waiting for " + cap
              serverside("dtlsPict", cap)
              .then((vid) => {

              
                if (vid) {

                      
                        // User clicked "No" or X in the title bar.
                        document.getElementById("indexDiv").innerHTML = htmlStructure
                        document.getElementById("indexRes").src = vid;}
                })
              .catch((er) => {

              
                console.log(er)
                document.getElementById("indexDiv").innerHTML = JSON.stringify(er)
                })

              
          })}
      </script>
      <script>
        document.getElementById("uiApp").addEventListener("change", research)
        function research() {
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler((result) => {
                resolve(result)})
            .withFailureHandler((error) => {
                console.log(error)
                console.log(document.getElementById("test").innerHTML)
                reject(error)})
            .runBoilerplate([func], [args])})};
        var bar = document.getElementById("uiApp").value || "";
        document.getElementById("uiApp").value = ""

        serverside("dtlsMain", bar)
        .then((cChange) => {
            if (cChange) {
              // console.log(cChange)
          var linkFollow = document.createElement("a");
          linkFollow.href = cChange;
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_child";
          document.body.appendChild(linkFollow);
        document.getElementById("linkFOLLOW").click();
        document.getElementById("linkFOLLOW").remove()}
                
        })
        .catch((er) => {

          console.log(er)

        })

        }
      </script>
      <script>
        function onUserClick(bar) {
          var foo = "videoPage";
          var linkFollow = document.createElement("a");
          linkFollow.href = <?= appUrl ?> + foo + "&args=" + bar;
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_child";
          document.body.appendChild(linkFollow);}
      </script>
      <script>
        function openTheForm(bar) {
          
          onUserClick(bar)
          document.getElementById("linkFOLLOW").click();
          document.getElementById("uiApp").value = ""
          document.getElementById("linkFOLLOW").remove()};
      </script>
    </body>
  </html>
  `,
  )
    .evaluate()
    .getContent();
};
// <div class="row">
//   <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
//     <div class="container">
//       <div class="col s12 receipt nav-wrapper deep-purple darken-1">
//           <a href="#" onclick="aboutMeSearch()" target="_self" id="aboutme">About-Me</a><br />
//           <a href="#" onclick="shopResearch()" id="shopstore">Store</a><br />
//           <a href="#" onclick="secResearch()" id="secenv">Local Enviroment</a><br />
//           <a href="#" onclick="calcResearch()" id="calculate">Calculate</a><br />
//           <a href="#" onclick="investResearch()" id="invest">Investors</a><br />
//           <a href="#" onclick="newResearch()" id="rndnew">New</a><br />
//       </div></div>
//     </nav>
// </div>
// <div class="row">
//   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
//     <div class="container">
//       <div class="col s12 receipt deep-purple darken-1">
//         <div id="dlts"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="row">
//   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
//     <div class="container">
//       <div class="col s12 receipt deep-purple darken-1">
//         <label for="appList" class="active" style="font-size: 16px; top: -5px; left: -4px;">Choose your function...</label>
//           <select id="appList" class="browser-default deep-purple darken-1"></select>
//       </div>
//     </div>
//   </div>
// </div>
