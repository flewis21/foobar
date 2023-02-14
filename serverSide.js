function all(func, args) {
  var arr = func.split(".");

  var libName = arr[0];
  var libFunc = arr[1];

  args = args || [];

  return this[libName][libFunc].apply(this, args);
}

function doGet(e) {
  var arr = ["foo", "doGet"] || e.parameter["func"].split(".");

  var libName = arr[0];
  var libFunc = arr[1];

  args = ["e"] || e.parameter["args"];

  return this[libName][libFunc].apply(this, args);
}
