var moveZeros = function (arr) {
  const filtered = arr.filter(item => item !== 0);
  const zeroCount = arr.length - filtered.length;
  return [...filtered, ...new Array(zeroCount).fill(0)];
}