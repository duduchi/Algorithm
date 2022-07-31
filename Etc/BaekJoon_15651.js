/*
1. 아이디어
15649 문제에서 중복 체크 로직을 제거하면 된다.
baekjoon 제출에서 수가 큰 반복적인 로직에서 console.log가 시간 초과를 야기할 수 있으므로, 변수를 지정하여 마지막에 찍도록 수정.
*/
const answer = ([data]) => {

    const [n,m] = data.split(' ').map(Number);

    const rs = [];
    let result = '';

    const setData = (num) => {
        if(num === m){
            // console.log(rs.join(' '));
            result += `${rs.join(' ')}\n`
            return;
        }
        for (let index = 1; index <= n; index++) {
            rs.push(index);
            setData(num + 1);
            rs.pop();            
        }
    }

    setData(0);
    console.log(result.trim())

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