const answer = ([...number]) => {

  const arr = number.map(data => Number(data))

  const order = arr[0];

  let dp = [];

  for (let index = 1; index <= order; index++) {
    dp = Array.from({ length: arr[index] + 1 }, () => 0);

    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;

    for (let index = 6; index < dp.length; index++) {
      dp[index] = dp[index - 1] + dp[index - 5];
    }

    console.log(dp[arr[index]])
  }
};


const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    // console.log(input)
    answer(input);
    process.exit();
  });

// https://www.acmicpc.net/problem/9461
// 다이내믹 프로그래밍은 점화식을 찾아서 리스트화 하는게 핵심