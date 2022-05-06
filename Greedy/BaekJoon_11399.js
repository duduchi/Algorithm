const answer = ([n, arr]) => {
    const time = arr.split(' ').map(Number).sort((a, b) => a - b);

    // 첫번째 풀이
    const totalTime = [];
    let sumTime = 0;
    for (let index = 0; index < time.length; index++) {
        sumTime += time[index];
        totalTime.push(sumTime);
    }

    console.log(totalTime.reduce((a,b) => a+b,0));

    // // 두번째 풀이
    // let sumTime = 0;
    // for (let index = 0; index < time.length; index++) {
    //     for (let index2 = 0; index2 < index + 1; index2++) {
    //         sumTime += time[index2]
    //     }        
    // }

    // console.log(sumTime);
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