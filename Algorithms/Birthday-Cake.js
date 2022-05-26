const a = [1, 2, 3, 1000, 1000, 6];

function birthdayCakeCandles(candles) {
  let max = Math.max(...candles),
    count = 0;

  for (let i = 0; i < candles.length; i += 1) {
    if (max == candles[i]) count += 1;
  }

  return count;
}

console.log(birthdayCakeCandles(a));
