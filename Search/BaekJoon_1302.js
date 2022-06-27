const answer = ([input,...n]) => {


    const books = n.sort();

    let maxCnt = 0;
    let nowCnt = 0;
    let maxBook = '';
    let nowBook = books[0];

    books.forEach(data => {
        if(nowBook === data){
            nowCnt += 1;
        }else{
            nowCnt = 1;
        }

        if(maxCnt < nowCnt){
            maxBook = nowBook
            maxCnt = nowCnt
        }
        nowBook = data;
    })

    console.log(maxBook);

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