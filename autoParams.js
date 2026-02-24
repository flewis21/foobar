const functionRegistry = {
  fileList: [],
  paramsList: [],
  htmlArray: ["Untitled", "Untitled2", "Untitled3"],

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
  getHtmlList: function () {
    return this.htmlArray;
  },
  maxTime: 6 * 60 * 1000,
  _startTime: null, // Private variable to store the timestamp when the process begins

  /**
   * Starts the global timer for your process.
   * This should be called only ONCE at the beginning of your main execution.
   */
  startProcessTimer: function () {
    if (this._startTime === null) {
      this._startTime = new Date().getTime();
      console.log(
        "Process timer started at:",
        new Date(this._startTime).toISOString(),
      );
    } else {
      console.warn(
        "Process timer has already started. Call resetProcessTimer() if you want to restart.",
      );
    }
  },

  /**
   * Resets the global timer. Call this if you want to start a completely new execution cycle.
   */
  resetProcessTimer: function () {
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

const zuluFrequencyOrder = [
  "a",
  "u",
  "i",
  "e",
  "o",
  "m",
  "n",
  "s",
  "h",
  "k",
  "l",
  "t",
  "b",
  "p",
  "g",
  "d",
  "y",
  "z",
  "w",
  "v",
  "f",
  "r",
  "c",
  "j",
  "q",
  "x",
  "ng",
  "sh",
  "ph",
  "bh",
  "hl",
  "th",
  "ch",
  "kh",
  "ts",
  "mb",
  "tsh",
  "dl",
  "nc",
  "nd",
  "nq",
  "nt",
];

const zuluFreqPriority = new Map();
zuluFrequencyOrder.forEach((char, index) => {
  zuluFreqPriority.set(char, index);
});
// Function to get the priority of the first letter/multigraph
const getZuluFreqPriority = (word) => {
  const lowercaseWord = word.toLowerCase();

  // Check for multigraphs first, as they are longer
  for (const key of zuluFrequencyOrder) {
    if (lowercaseWord.startsWith(key)) {
      return zuluFreqPriority.get(key);
    }
  }

  // If no multigraph is found, check for single letters
  if (lowercaseWord.length > 0) {
    return zuluFreqPriority.get(lowercaseWord.charAt(0));
  }

  return Infinity; // For empty strings
};
const zuluOrder = [
  "a",
  "b",
  "bh",
  "c",
  "ch",
  "d",
  "dl",
  "e",
  "f",
  "g",
  "h",
  "hh",
  "hl",
  "i",
  "j",
  "k",
  "kh",
  "l",
  "m",
  "n",
  "o",
  "p",
  "ph",
  "q",
  "r",
  "s",
  "sh",
  "t",
  "th",
  "ts",
  "tsh",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const zuluPriority = new Map();
zuluOrder.forEach((char, index) => {
  zuluPriority.set(char, index);
});
// Function to get the priority of the first letter/multigraph
const getZuluPriority = (word) => {
  const lowercaseWord = word.toLowerCase();

  // Check for multigraphs first, as they are longer
  for (const key of zuluOrder) {
    if (lowercaseWord.startsWith(key)) {
      return zuluPriority.get(key);
    }
  }

  // If no multigraph is found, check for single letters
  if (lowercaseWord.length > 0) {
    return zuluPriority.get(lowercaseWord.charAt(0));
  }

  return Infinity; // For empty strings
};
const customOrder = [
  "e",
  "t",
  "a",
  "o",
  "n",
  "r",
  "i",
  "s",
  "h",
  "d",
  "l",
  "f",
  "c",
  "m",
  "u",
  "g",
  "y",
  "p",
  "w",
  "b",
  "v",
  "k",
  "x",
  "j",
  "q",
  "z",
];

// Step 1: Create a lookup map for quick access to priority/rank
// Lower index in customOrder means higher priority (comes earlier in sort)
const freqPriority = new Map();
customOrder.forEach((char, index) => {
  freqPriority.set(char, index);
});

// Example array to sort (e.g., letters from a scrambled word)
// const scrambledWordLetters = ["l", "e", "h", "l", "o"]; // To form "hello"

// scrambledWordLetters.sort((a, b) => {
//   const priorityA = charPriority.get(a);
//   const priorityB = charPriority.get(b);

//   // Handle cases where a character might not be in your customOrder (optional, but good practice)
//   // For this example, assuming all characters are in customOrder
//   if (priorityA === undefined || priorityB === undefined) {
//     // You might throw an error, put them at the end, or define custom logic
//     // For simplicity, let's assume all chars are found.
//     console.warn("Character not found in custom order:", a, b);
//     // Fallback to alphabetical for unknown chars, or push them to end
//     if (priorityA === undefined && priorityB !== undefined) return 1; // Unknown to end
//     if (priorityA !== undefined && priorityB === undefined) return -1; // Known to front
//     return 0; // Both unknown, keep original order
//   }

//   // Compare based on their priorities (lower index means higher priority, so a - b)
//   return priorityA - priorityB;
// });

// console.log(scrambledWordLetters); // Output based on your custom order: ["e", "l", "l", "o", "h"]

globalThis.searchString = function () {
  console.log(
    foo.formatTime(functionRegistry.time) +
      "\nBoilerplate autoParams line 654\nsearchString()\n" +
      arguments.callee.caller.name,
  );
  var arrDRnd = functionRegistry.getFileList();
  var arrD = functionRegistry.getFileList();
  var newArr = [];
  var i = 0 || 0;
  var l = 6 || 1;
  // console.log(arrDRnd.sort((a, b) => a - b))
  // console.log(arrData.sort((a, b) => a - b))
  if (arrDRnd && typeof arrD === "undefined") {
    for (i, l; i < l; i++) {
      var elaspeTime = new Date() - functionRegistry.time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\ntypeof arrDRnd: " +  typeof arrDRnd + "\nelaspeTime: " + elaspeTime)
      if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
        var myImportData = arrDRnd.sort((a, b) => {
          let pA = freqPriority.get(a);
          let pB = freqPriority.get(b);
          return pA - pB;
        })[Math.floor(Math.random() * arrDRnd.length)];
        newArr.push(myImportData);
        var elaspeTime = functionRegistry.time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      } else if (
        typeof arrDRnd !== "undefined" &&
        typeof arrDRnd === "string"
      ) {
        var myImportData = [arrDRnd].sort((a, b) => {
          let pA = freqPriority.get(a);
          let pB = freqPriority.get(b);
          return pA - pB;
        })[Math.floor(Math.random() * [arrDRnd].length)];
        newArr.push(myImportData);
        var elaspeTime = functionRegistry.time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      }
    }
  } else if (typeof arrD !== "undefined") {
    for (i, l; i < l; i++) {
      var myArrData = arrD.sort((a, b) => {
        let pA = freqPriority.get(a);
        let pB = freqPriority.get(b);
        return pA - pB;
      })[Math.floor(Math.random() * arrD.length)];
      newArr.push(myArrData);
      var elaspeTime = functionRegistry.time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyArrData: " + myArrData + "\nelaspeTime: " + elaspeTime)
    }
  }
  console.log("boilerplate autoParams: line 455");
  // console.log(
  //   "randomSubstance: \n( \0: " +
  //     0 +
  //     "\nLoop Length: " +
  //     6 +
  //     "\nImported Data: " +
  //     arrDRnd +
  //     "\nArray Data: " +
  //     arrD +
  //     "\nTime: " +
  //     functionRegistry.time +
  //     " )",
  // );
  if (newArr) {
    var sortNewArr = newArr.sort((a, b) => {
      let pA = freqPriority.get(a);
      let pB = freqPriority.get(b);
      return pA - pB;
    })[Math.floor(Math.random() * newArr.length)];
    // return console.log({myNewArr: sortNewArr});
    return { myNewArr: sortNewArr };
    console.log();
  }
};
