const answer = ([n, ...arr]) => {
    const dp = [];
    
    for (let i = 0; i < Number(n); i++) {
        dp.push(arr[i].split(" ").map(Number));
    }

    for (let i = 1; i < Number(n); i++) {
        for (let j = 0; j <= i; j++) {
            let temp;
            if (j === 0) {
                temp = dp[i - 1][j] // 인덱스 0번꺼 끼리 다 더하는 경우는 1가지
            }
            else if (j === i) {
                temp = dp[i - 1][j - 1] // 인덱스 마지막 끼리 다 더하는 경우는 1가지
            }
            else {
                temp = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) // 2개 중 큰 숫자를 더하기
            }
            dp[i][j] += temp;
        }
    }

    console.log(dp)
    console.log(Math.max(...dp[n - 1]));
};

const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line);
    })
    .on("close", () => {
        console.log(input)
        answer(input);
        process.exit();
    });