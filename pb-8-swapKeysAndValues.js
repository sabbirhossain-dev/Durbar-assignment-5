function swapKeysAndValues(obj) {
  const result = {};

  const entries = Object.entries(obj);

  for (let i = 0; i < entries.length; i++) {
    const key = entries[i][0];
    const value = entries[i][1];
    result[String(value)] = key;
  }

  return result;
}

console.log(swapKeysAndValues({ a: "x", b: "x" }));
console.log(swapKeysAndValues({ a: "x", b: "y" }));
