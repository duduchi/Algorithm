const answer = ([input,...n]) => {


    const books = n.sort();

    let maxCnt = 0; // 가장 많이 팔린 책의 수
    let nowCnt = 0; // 현재 검색하고 있는 책의 수
    let maxBook = ''; // 가장 많이 팔린 책의 이름
    let nowBook = books[0]; // 비교를 위하여 책의 첫번째 요소를 할당

    books.forEach(data => {
        // 현재의 책과 과거의 책이 같은면 카운트 + 1 / 같이 않으면 카운트 = 1
        if(nowBook === data){
            nowCnt += 1;
        }else{
            nowCnt = 1;
        }

        // 현재의 카운트가 가장 많이 팔린 책의 수 보다 크면 가장 많이 팔린 책의 이름과 카운트를 변경
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