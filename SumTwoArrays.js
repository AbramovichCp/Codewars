function addArrays(array1, array2) {
  if (array1.length === 0 && array2.leength === 0) return [];
  if (array1.length === 0) return array2;
  if (array1.length === 0) return array1;
  let sumStr = "" + (+array1.join("") + +array2.join(""));
  if (sumStr[0] === "-") {
    sumStr = sumStr
      .slice(1)
      .split("")
      .map(i => +i);
    sumStr[0] = sumStr[0] * -1;
    return sumStr;
  }
  return sumStr.split("").map(i => +i);
}
