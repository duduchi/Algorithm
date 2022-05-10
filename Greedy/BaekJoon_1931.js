const answer = ([n, ...arr]) => {
  const times = arr.map((list) => list.split(" ").map(Number));

  // 가장 빠르게 끝나는 순 => 끝나는 시간이 같다면 빠르게 시작하는 순
  times.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let answer = 0;
  let beforeEndTime = 0;

  for (const data of times) {
    const startTime = data[0];
    const endTime = data[1];

    // 시작시간이 이전의 종료시간보다 같거나 크면 새로운 회의
    if (startTime >= beforeEndTime) {
      answer++;
      beforeEndTime = endTime;
    }
  }

  console.log(answer);
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    answer(input);
    process.exit();
  });
