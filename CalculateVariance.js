const variance = arr => {
  const mean = getMean(arr);
  const sum = arr.reduce((acc, curr) => {
    return acc + Math.pow(curr - mean, 2);
  }, 0);
  return sum / arr.length;
};

const getMean = arr => {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
};
