/*
연속된 수 끼리만 더할 수 있다.
list 이번값과 dp 이전값을 더하였을 때 dp의 이전값보다 크면 더하는 방식을 반복하여 연속된 수 사이에서 계속 더하기를 반복해 나간다.
*/

const answer = ([n,data]) => {
    const list = data.split(' ').map(Number);

    const dp = [];
    for (let index = 0; index < Number(n); index++) {
        dp[index] = list[index]

        if(dp[index] < dp[index-1] + list[index]){
            dp[index] = dp[index-1] + list[index]
        }
    }

    console.log(Math.max(...dp))

}

const input = [];
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
    input.push(line);
}).on('close', () => {
    answer(input);
    process.exit();
})