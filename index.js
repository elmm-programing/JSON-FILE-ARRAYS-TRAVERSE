let array = [];

let printArray = function (arr) {
  if (arr != null) {
    if (typeof arr === "object") {
      for (var i = 0; i < arr.length; ++i) {
        printArray(arr[i]);
      }
    } else {
      if (arr != "" && arr != "undefined") {
        array.push(arr);
      }
    }
  }
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Insert JSON file url=", (url) => {
  let jsonData = require(url);
  printArray(jsonData);
  let uniqueChars = [...new Set(array)];
  console.log(uniqueChars);
  readline.close();
});
