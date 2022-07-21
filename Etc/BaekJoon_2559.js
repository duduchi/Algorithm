/*
이중 for 문을 돌면서 max값을 구하면 시간복잡도가 (N*2) 이므로 100,000 인 경우에는 시간 초과를 하기 때문에 이중 for문은 사용하지 못한다.
이 경우에 온도가 배열에 연속으로 들어가 있다는 것을 사용하여 투포인터 방법으로 문제를 풀이.
*/

const answer = ([data,list]) => {

    const [n,k] = data.split(' ').map(Number);
    const temperList = list.split(' ').map(Number);

    let each = 0;
    let max;

    for (let index = 0; index < k; index++) {
        each += temperList[index];
    }

    max = each;

    for (let index = k; index < temperList.length; index++) {
        each += temperList[index];
        each -= temperList[index-k];
        max = Math.max(each,max)        
    }

    console.log(max);
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