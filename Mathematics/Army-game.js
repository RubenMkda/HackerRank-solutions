"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const result = gameWithCells(n, m);

  ws.write(result + "\n");

  ws.end();
}
