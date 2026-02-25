var isTypeScript = function (typePassedIn) {
  var mapTypes = {};
  for (var key in typePassedIn) {
    mapTypes[key] = typePassedIn[key];
  }
  return mapTypes;
};

function isValidKeys(v) {
  var isExcludeValue = isOmit(v, "1");
  isExcludeValue = isOmit(isExcludeValue, "2");
  isExcludeValue = isOmit(isExcludeValue, "3");
  var isValueOfTypePassedIn = isValidDoubleObject(isExcludeValue);
  if (isValueOfTypePassedIn) {
    var isInferredTruthy = isTruthy(isValueOfTypePassedIn);
    if (isInferredTruthy) {
      return isValueOfTypePassedIn;
    }
  }
};

var isMapped = function (t, v) {
  var mapKeys = {};
  for (var key in t) {
    mapKeys[key] = v || typeof t[key];
  }
  return mapKeys;
};

var isTruthy = function (t) {
  if (
    typeof t === null ||
    t === null ||
    typeof t === "undefined" ||
    t === "undefined" ||
    typeof t === false ||
    t === false ||
    t === 0 ||
    t === ""
  ) {
    return false;
  } else {
    return true;
  }
};

var isValidDoubleObject = function (t) {
  // var validKeys = isMapped(t);
  var validList = Object.values(t);
  if (validList.length === 2) {
    var valid1 = validList[0];
    var valid2 = validList[1];
    if (typeof valid1 === typeof valid2) {
      return typeof valid1;
    } else {
      return;
    }
  }
  return validList;
};

var isKeyOf = function (t) {
  var keyList = {}; //Object.keys(t);
  for (var key in t) {
    keyList[key] = key;
  }
  return keyList;
};

var isPropertyOf = function (t) {
  var propertyList = isMapped(t);
  return propertyList;
};

var isOmit = function (t, k) {
  var valuesList = isPick(t, k);
  return valuesList;
};

var isExclude = function (t, k) {
  var keyList = Object.keys(t);
  var excludeList = [];
  Array.isArray(keyList)
    ? keyList.forEach((e, i) => {
        if (!e.includes(k)) {
          excludeList.push(e);
        }
      })
    : Array(keyList).forEach((e, i) => {
        if (!e.includes(k)) {
          excludeList.push(e);
        }
      });
  return excludeList;
};

var isPick = function (t, k) {
  var excludeList = isExclude(t, k);
  var valuesList = {};
  for (var key in t) {
    if (excludeList.includes(key)) {
      valuesList[key] = t[key];
    }
  }
  return valuesList;
};

var geneicType = function () {
  var exampleObjectType = {
    a: "string",
    b: 123,
    c: ["string"],
  };
  // var functionObjectType = resolveParams(["isOmit",["e","b"],"isPick",["e","a"],"isExclude",["e","c"],"isMapped",["e","f"],"isPropertyOf","e","isKeyOf","e","isTruthy","e",,"isTypeScript","e","isValidDoubleObject",{a:"e",b:"e"}]);
  // var functionObjectType = resolveParams(["dtlsPro","bounty","portBing","hunter"]);
  let randonWord = [globalThis.searchString().myNewArr]
    .join("")
      .split("")
        .sort((a,b) => {
          let priorityA = 0;
          let priorityB = 0;
          if (Math.random() < 0.5) {
            priorityA = getZuluFreqPriority(a);
          }
          if (Math.random() < 0.5) {
            priorityB = freqPriority.get(b);
          }
          return priorityA - priorityB
        }).join("")
  var functionObjectType = doGet({parameter: {q: randonWord}});
  // var isExcludeValue = isOmit(functionObjectType["dtlsPro"], "c");
  // isExcludeValue = isOmit(isExcludeValue, "2");
  // isExcludeValue = isOmit(isExcludeValue, "3");
  var teeValid1 = isMapped({ 0: null }, [
    "isValidUrl",
    "http://www.google.com",
  ])[0];
  var forTruth = resolveParams(teeValid1);
  // var tee = isPropertyOf(teeValid1)
  // var kee = isMapped(tee)
  var noB = isValidKeys(forTruth);
  return noB;
};