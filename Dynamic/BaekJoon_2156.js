const answer = ([n, ...arr]) => {
    const parseN = Number(n);

    const temp = [0,0,0];
    const dp = [0,0,0]
    for (let index = 0; index < parseN; index++) {
        temp.push(Number(arr[index]))
        dp.push(0)
    }


    for (let index = 3; index < temp.length; index++) {
        dp[index] = Math.max(dp[index - 1], dp[index - 2] + temp[index], dp[index - 3] + temp[index - 1] + temp[index])
    }

    console.log(Math.max(...dp))
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