function doGet(e) {
  var foobarr = e.parameter["func"] || "foo.doGet";
  var arr = [foobarr].toString().split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = [e.parameter["args"]] || [Utilities.jsonStringify(e)];
  return foo.renderTemplate(this[libName][libFunc].apply(this, args));
}

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};
