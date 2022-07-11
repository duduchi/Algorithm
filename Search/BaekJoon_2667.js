/*
이중 for문을 돌면서 1을 발견하는 경우 탐색 알고리즘을 실행한다.
여기서 탐색 알고리즘은 DFS를 사용한다.
DFS는 재귀를 이용하여 풀 수 있다.
*/

const answer = ([n,...input]) => {

    const arr = input.map(list =>list.split('').map(Number));
    const checked = Array.from({length : Number(n)});
    for (let index = 0; index < checked.length; index++) {
        checked[index] = Array.from({ length: Number(n) }, () => false)        
    }

    const result = [];
    let count = 0;

    const dfs = (x,y) => {
        // 함수가 호출 되었으면 집을 찾은 것 이기 떄문에 +1
        count += 1;
        const mx = [1,0,-1,0];
        const my = [0,1,0,-1];

        for (let index = 0; index < 4; index++) {
            // 위, 아래, 오른쪽, 왼쪽 으로 각각 가는 경우 체크
            const rx = x + mx[index];
            const ry = y + my[index];

            // 움직일 방향이 배열을 안 벗어나고, 방문한적이 없고, 값이 1인 경우에 다시 dfs함수를 호출하여 재귀
            if((0<=rx && rx<Number(n)) && (0<=ry && ry<=Number(n)) && checked[rx][ry] === false && arr[rx][ry] === 1){
                checked[rx][ry] = true;
                dfs(rx,ry);
            }
        }
    }

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr.length; y++) {
            if(arr[x][y] === 1 && checked[x][y] === false){
                //DFS 시작 하기 전에 count 값 초기화
                count = 0;
                // 방문 처리
                checked[x][y] = true;
                // DFS
                dfs(x,y)
                result.push(count);
            }            
        }        
    }

    result.sort((a,b) => a-b);
    console.log(result.length);
    result.forEach(data => console.log(data));

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