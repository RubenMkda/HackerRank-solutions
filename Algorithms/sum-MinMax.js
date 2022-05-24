const arr = [1, 2, 3, 4, 5];

function minMaxSum(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sumMax = min * -1,
    sumMin = max * -1;

  for (let i = 0; i < arr.length; i++) {
    sumMax = sumMax + arr[i];
    sumMin = sumMin + arr[i];
  }

  return [sumMin, sumMax];
}

console.log(minMaxSum(arr));
