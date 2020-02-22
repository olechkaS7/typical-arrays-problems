
exports.min = function min (array) {
  if (arguments[0] === undefined) {
    return 0;
  }

  if (array.length === 0) {
    return 0;
  }

  let min = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

exports.max = function max (array) {
  if (arguments[0] === undefined) {
    return 0;
  }

  if (array.length === 0) {
    return 0;
  }

  let max = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

exports.avg = function avg (array) {
  if (arguments[0] === undefined) {
    return 0;
  }

  if (array.length === 0) {
    return 0;
  }

  let sum = array[0];
  for (let i = 1; i < array.length; i += 1) {
    sum += array[i];
  }

  const avg = sum / array.length;
  return avg;
}
