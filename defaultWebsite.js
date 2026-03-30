/**
 * Creates a new Function with a random structure and content,
 * leveraging available ScriptsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial script creation) is NOT available via the ScriptApp API.
 * The script will use Google Scripts' default theme or the last manually applied theme.
 *
 * @returns {object} The newly created random Google Script.
 */
function createRandomFunction(searchString) {
  // --- Configuration for randomness ---
  var executed = 0;
  console.info("previously exec count \ncreateRandomFunction - ", executed);
  const SCRIPT_TITLES = searchString
    ? Array(searchString)
    : functionRegistry.fileList;
  // --- Create the script ---
  executed++;
  const scriptTitle =
    SCRIPT_TITLES[Math.floor(Math.random() * SCRIPT_TITLES.length)];
  const script = globalThis[scriptTitle]; //ScriptApp.newTrigger(scriptTitle).timeBased().everyHours(24).create();
  Logger.log(`Random script: ${script?.toString()}`);
  Logger.log(`Script name: ${scriptTitle}`);
  console.info("previously exec count \ncreateRandomFunction - ", executed);
  const isRequired = reqChoice(); //Math.random() < 0.7; // 70% chance of being required
  executed++;

  let fileIndex; //= crmT(scriptTitle)
  let fileParams; //= functionRegistry.paramsList[fileIndex]
  let scriptUrl; //= script()//.getPublishedUrl();
  let mapArr = {};
  if (isRequired) {
    console.log("isRequired", isRequired);
    // console.info(userEMail);
    if (!script || (script && script?.length === 0)) {
      console.log("!script || (script && script?.length === 0)");
      console.info(script?.toString() || scriptTitle);
      // var tempObj =
      if (!script) {
        console.log("!script");
        mapArr["driveManager"] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        let tempObj = isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        executed++;
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        scriptUrl = resolveParams(tempObj);
        executed++;
      } else {
        console.log("(script && script?.length === 0)");
        mapArr[scriptTitle] = [];
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        let tempObj = isMapped(mapArr, [scriptTitle])[scriptTitle];
        executed++;
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        scriptUrl = resolveParams(tempObj);
        executed++;
      }
    } else {
      // console.info("script\n", script?.toString() || scriptTitle);
      mapArr[scriptTitle] = [];
      console.info("previously exec count \ncreateRandomFunction - ", executed);
      fileIndex = crmT(scriptTitle);
      executed++;
      console.info("previously exec count \ncreateRandomFunction - ", executed);
      fileParams = functionRegistry.paramsList[fileIndex];
      executed++;
      console.info("previously exec count \ncreateRandomFunction - ", executed);
      let tempObj = isMapped(mapArr, [scriptTitle, [...fileParams.parameters]])[
        scriptTitle
      ];
      executed++;
      Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
      scriptUrl = resolveParams(tempObj);
      executed++;
      console.info("previously exec count \ncreateRandomFunction - ", executed);
    }
  } else {
    console.log("isRequired", isRequired);
    if (!script || script.length === 0) {
      console.log("!script || (script && script?.length === 0)");
      if (!script) {
        console.log("!script");
        mapArr["driveManager"] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        let tempObj = isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        executed++;
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        scriptUrl = resolveParams(tempObj);
        executed++;
      } else {
        console.log("(script && script?.length === 0)");
        mapArr[scriptTitle] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        let tempObj = isMapped(mapArr, [scriptTitle])[scriptTitle]; //userSubmit.getPublishedUrl()]);
        executed++;
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        console.info(
          "previously exec count \ncreateRandomFunction - ",
          executed,
        );
        scriptUrl = resolveParams(tempObj);
        executed++;
      }
    } else {
      // console.info("script\n", script?.toString() || scriptTitle);
      console.info("previously exec count \ncreateRandomFunction - ", executed);
      fileIndex = crmT(scriptTitle);
      executed++;
      console.info("previously exec count \ncreateRandomFunction - ", executed);
      fileParams = functionRegistry.paramsList[fileIndex];
      executed++;
      mapArr[scriptTitle] = [];
      console.info("previously exec count \ncreateRandomFunction - ", executed);
      scriptUrl = isMapped(mapArr, [...fileParams.parameters]);
      executed++;
    }
  }
  // --- Log and Return Script URL ---
  Logger.log(`Random script Created: ${JSON.stringify(scriptUrl)}`);
  return scriptUrl;
}

var getScriptUrl = function () {
  return ScriptApp.getService().getUrl();
};
