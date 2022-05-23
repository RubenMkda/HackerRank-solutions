const n = 6;

function staircase(n) {
  let space = " ",
    hastag = "#";

  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + hastag.repeat(i));
  }
}

staircase(n);
