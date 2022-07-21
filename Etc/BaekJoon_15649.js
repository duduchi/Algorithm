/*
1~N까지의 숫자를 M개의 조합으로 중복없이 모든 경우의 수를 조합해야 한다.
모든 조합을 탐색하다가 조건에 안 맞으면 종료를 해야 하기 때문에 백트래킹 이론을 적용하였다.

** 반복되는 횟수가 10보다 작을 때는 백트래킹 이론을 적용할 수 있는지 먼저 확인 해 보자
*/

const answer = ([data]) => {

    const [n,m] = data.split(' ').map(Number);
    const result = [];
    const checked = [null]; // 1부터 n까지의 경우를 확인해야 하므로 매 순간 index+1을 하지 않기 위해서 0번 index 에 null 추가

    for (let index = 0; index < n; index++) {
        checked.push(false);        
    }


    const setData = (num) => {
        if(num === m){
            console.log(result.join(' '));
            return;
        }

        for (let index = 1; index <= n; index++) {
            if(checked[index] === false){ // 이미 사용 중인지 확인
                result.push(index); //  결과 배열에 추가
                checked[index] = true; // 체크 배열에서 해당 index  true로 변경
                setData(num + 1); // 다음에 넣을 값 찾기 위하여 재귀
                checked[index] = false; // m번 만큼 찼으면 마지막 요소는 제거
                result.pop();// m번 만큼 찼으면 마지막 요소는 제거  
            }            
        }
    }

    setData(0); // 0부터 시작
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