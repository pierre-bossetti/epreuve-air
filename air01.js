// découpe une string en tableau en fonction du deuxième argument
String.prototype.myCustomSplit = function (splitVal) {
  const outputArr = [];
  const string = this;
  let nextVal = "";
  const splitlength = splitVal.length;
  let i = 0;
  while (i < string.length) {
    if (string[i] === splitVal[0]) {
      let split_length_remaining = splitlength - 1;
      let split_length_passed = 1;
      let similarSplit = string[i];
      while (split_length_remaining) {
        if (string[i + split_length_passed] === splitVal[split_length_passed]) {
          similarSplit += string[i + split_length_passed];
          split_length_passed++;
          split_length_remaining--;
        } else {
          break;
        }
      }
      if (!split_length_remaining) {
        outputArr.push(nextVal);
        nextVal = "";
      } else {
        nextVal += similarSplit;
      }
      i = i + split_length_passed;
    } else {
      nextVal += string[i];
      i++;
    }
  }
  outputArr.push(nextVal);
  return outputArr;
};

// imprime les elements du tableau
if (process.argv.length != 4) {
  console.log("error");
} else {
  const string1 = process.argv[2].myCustomSplit(process.argv[3]);
  for (let i = 0; string1[i]; i++) {
    console.log(string1[i]);
  }
}
