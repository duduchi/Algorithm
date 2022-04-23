const answer = ([n, ...arr]) => {
    const parseN = Number(n);

    const temp = [];
    for (let index = 0; index < parseN; index++) {
        temp.push(Number(arr[index]))
    }

    const dp = Array.from({length: parseN-1}, () => 0);

    dp[0] = temp[0];
    dp[1] = temp[0] + temp[1];
    dp[2] = Math.max(temp[0] + temp[2], temp[1] + temp[2])


    for (let index = 3; index < parseN; index++) {
        dp[index] = Math.max(dp[index-3] + temp[index-1] + temp[index] , dp[index-2]+ temp[index]);
    }

    console.log(dp[parseN -1])    
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

// https://www.acmicpc.net/problem/2579
// i칸에 오를 수 있는 경우는 i-3 + i-1 + i (2칸 -> 1칸 -> 1칸)를 오를건지 i-2 + 1(2칸 -> 1칸)