const answer = ([n, inputs]) => {
    const dp = Array.from({length : n},()=>1);
    const arr = inputs.split(" ").map(Number);

    for (let i = 1; i < arr.length; i++) {
        let temp = 0;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && temp < dp[j] + 1) {
                temp = dp[j] + 1
            }
        }
        if (temp > 1) {
            dp[i] = temp;
        }
    }

    console.log(Math.max(...dp))
}

const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line)
    }).on("close", () => {
        answer(input);
        process.exit()
    })