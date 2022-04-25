const answer =(n) => {
    const arr = Array.from({length: Number(n) + 1}, () => 0);

    arr[1] = 0;
    arr[2] = 1;
    arr[3] = 1;

    for (let index = 4; index < arr.length; index++) {
        arr[index] = arr[index-1] + 1; // 그 전 값보다 1을 더한 수 였을 경우

        if(index % 3 === 0){
            arr[index] = Math.min(arr[index],arr[index/3] + 1) // 그 전에 3으로 나눌 수 있는 수의 최소값의 +1 과 그 전 값보다 +1만 했을 경우 중 최솟값
        }
        if(index % 2 === 0){
            arr[index] = Math.min(arr[index],arr[index/2] + 1) // 그 전에 2으로 나눌 수 있는 수의 최소값의 +1 과 그 전 값보다 +1만 했을 경우 중 최솟값
        }
    }

    console.log(arr[Number(n)]);
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

// https://www.acmicpc.net/problem/1463
// 문제 안에 힌트와 답이 있으니 자세히 보자(+1, /2, /3)
// 그 전 값에 1을 더한 횟수와 2,3 으로 나누어 떨어지는 수의 최소에 1을 더한 횟수 중 최소값 찾기