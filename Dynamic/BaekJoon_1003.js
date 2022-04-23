const answer = (arr) => {

    const inputArr = [];

    const parseN = Number(arr[0]);

    for (let index = 1; index <= parseN; index++) {
        inputArr.push(Number(arr[index]))
    };

    for (let index = 0; index < inputArr.length; index++) {

        // 1. 0 호출되는 리스트 만들기
        const zeroArr = Array.from({ length: inputArr[index] + 1 }, () => 0);

        // 1-2. 초기값 설정
        zeroArr[0] = 1;
        zeroArr[1] = 0;

        // 1-3. 점화식 적용
        for (let i = 2; i < zeroArr.length; i++) {
            zeroArr[i] = zeroArr[i - 1] + zeroArr[i - 2]
        }

        // 2. 1 호출되는 리스트 만들기
        const oneArr = Array.from({ length: inputArr[index]  + 1}, () => 0);

        // 2-1. 초기값 설정
        oneArr[0] = 0;
        oneArr[1] = 1;

        // 2-2. 점화식 적용
        for (let j = 2; j < oneArr.length; j++) {
            oneArr[j] = oneArr[j - 1] + oneArr[j - 2]
        }

        // 3. 화면 출력
        console.log(`${zeroArr[inputArr[index]]} ${oneArr[inputArr[index]]}`);
    }


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

    // https://www.acmicpc.net/problem/1003
    // 0을 출력하는 배열과 1을 출력하는 배열을 각각 피보나치 배열을 적용하여 풀면 됨.
    // F(n) = F(n-2) + F(n-1)