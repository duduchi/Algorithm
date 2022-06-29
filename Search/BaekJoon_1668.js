const count = (arr) => {
    let count = 1;
    let data = arr[0]

    for (let index = 1; index < arr.length; index++) {
        if(data < arr[index]){
            data = arr[index]
            count += 1;
        }
    }
    console.log(count);
}

const answer = ([input,...n]) => {

    const arr = n.map(Number);

    count(arr);
    arr.reverse();
    count(arr);
  
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