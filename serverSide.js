function doGet(e) {
  var foobarr = e.parameter["func"] || "foo.doGet";
  var arr = [foobarr].toString().split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = [e.parameter["args"]] || [
    "bing.com",
    null,
    { muteHttpExceptions: true },
  ];
  return foo.renderTemplate(
    foo.contentApp(this[libName][libFunc].apply(this, args)),
    { e: e },
  );
}

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};
