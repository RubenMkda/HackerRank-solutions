function diagonalDifference(arr) {
  let x = 0,
    y = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i][j];
    j++;
  }
  j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    y += arr[i][j];
    j--;
  }

  let n = x - y;
  if (n < 0) n *= -1;

  return n;
}
