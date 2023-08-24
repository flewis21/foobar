var doGet = function (e) {
  var foobarr = e.parameter["func"] || "renderFile";
  var libName = "foo";
  var libFunc = foobarr;
  var rndPage = [
    `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
  ]
    .toString()
    .split(" ")[
    Math.floor(
      Math.random() *
        Math.floor(
          [
            `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
          ]
            .toString()
            .split(" ").length,
        ),
    )
  ];
  var args = e.parameter["args"] || "jFundamentals";
  return renderTemplate(
    `
      <div id="pageObj"></div>
      <script> 
        document.addEventListener("DOMContentLoaded", eRun)
      function eRun() {
        document.getElementById("pageObj").innerHTML = <?!= JSON.stringify(e) ?>} 
      </script>
      <?!= renBlob ?>
      `,
    {
      renBlob: this[libName].contentApp(`<?!= appL ?>`, {
        appL: this[libName][foobarr].apply(this, [args]),
      }),

      e: JSON.stringify(e),
    },
  );
};

var runBoilerplate = function (func, args) {
  var libName = "foo";
  var libFunc = func || "doGet";
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};
