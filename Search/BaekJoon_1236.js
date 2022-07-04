const answer = ([input,...n]) => {

    // 2차 배열 생성
    const arr = n.map(data => data.split(''));

    let cnt1 = 0; // 가로
    let cnt2 = 0; // 세로

    // 가로에 경비원을 세울 수 있는 경우의 수
    arr.forEach(data => {
        if(data.indexOf('X') === -1){
            cnt1 ++;
        }
    })

    // 세로에 경비원을 세울 수 있는 경우의 수
    for (let index = 0; index < arr[0].length; index++) {
        const temp = [];
        for (let index2 = 0; index2 < arr.length; index2++) {
            temp.push(arr[index2][index]);
        }
        if(temp.indexOf('X') === -1){
            cnt2 ++;
        }
    }


    // 가로 세로 경우의 수 중 큰 값
    const cnts = [cnt1,cnt2];
    console.log(Math.max(...cnts))
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