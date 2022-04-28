const answer = (number) => {
    const arr = Array.from({length : number + 1}, () => 0);

    arr[1] = 1;
    arr[2] = 2;

    for (let index = 3; index < arr.length; index++) {
        arr[index] = (arr[index-1] + arr[index-2]) % 15746;        
    }

    const result = arr[number];

    console.log(result);
}


const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line);
    })
    .on("close", () => {
        // console.log(input)
        answer(Number(input));
        process.exit();
    });


// https://www.acmicpc.net/problem/1904
