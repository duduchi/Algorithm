const answer = ([n, ...arr]) => {

    const dp =
        arr.map(list =>
            list.split(' ').map(data => Number(data))
        )

    for (let i = 1; i < n; i++) {
        // 이번에 칠하는게 빨간색이면 그 전에는 초록 or 파란색 중 하나
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + dp[i][0];

        // 이번에 칠하는게 초록색이면 그 전에는 빨강 or 파란색 중 하나
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + dp[i][1];

        // 이번에 칠하는게 파란색이면 그 전에는 빨강 or 초록색 중 하나
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + dp[i][2];
    }

    console.log(Math.min(...dp[n - 1]));
}


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

    // https://www.acmicpc.net/problem/1149