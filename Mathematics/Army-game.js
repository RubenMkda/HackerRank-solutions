/*
 * Complete the 'gameWithCells' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function gameWithCells(n, m) {
  let count = 0;

  if (n % 2 === 0 && m % 2 === 0) {
    return (count = (n / 2) * (m / 2));
  }
  if (n % 2 === 0 && m % 2 !== 0) {
    return (count = (n / 2) * (m / 2 + 0.5));
  }

  if (n % 2 !== 0 && m % 2 == 0) {
    return (count = (n / 2 + 0.5) * (m / 2));
  }

  if (n % 2 !== 0 && m % 2 !== 0) {
    return (count = (n / 2 + 0.5) * (m / 2 + 0.5));
  }
}
