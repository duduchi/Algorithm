/*
1. 아이디어
15649에 이은 백트레킹 문제에 오름차순 조건이 추가되었다.
종료하는 조건에 마지막값과 마지막 전 값을 비교해서 오름차순인지 확인하여 아닐시에는 종료를 하는 조건을 추가한다.
*/

const answer =([data]) => {
    const [n,m] = data.split(' ').map(Number);

    const rs = [];
    const checked = [null];

    for (let index = 0; index < n; index++) {
        checked.push(false);        
    }    

    const setData = (num) => {
        if(rs.at(-1)< rs.at(-2)){
            return;
        }
        // if(rs.length >= 2 && rs[rs.length-1] < rs[rs.length-2]){
        //     return;
        // }
        if(num === m){
            console.log(rs.join(' '));
            return;
        }
        

        for (let index = 1; index <= n; index++) {
            if(checked[index] === false){
                checked[index] = true;
                rs.push(index);
                setData(num + 1);
                checked[index] = false
                rs.pop();
            }
        }
    }

    setData(0);

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