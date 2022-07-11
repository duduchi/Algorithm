const answer = ([n, search, m, target]) => {

    const maxIndex = Number(n) - 1;
    const search_arr = search.split(' ').map(Number);
    const target_arr = target.split(' ').map(Number);

    // 검색 배열을 정렬
    search_arr.sort((a,b) => a-b);

    const getSearch = (st, en, target) => {
        if (st === en) {
            if (search_arr[st] === target) {
                console.log(1)
            } else {
                console.log(0)
            }
            return;
        }
    
        const mid = Math.floor((st + en) / 2);
    
        if (search_arr[mid] < target) {
            getSearch(mid + 1, en, target)
        }
        else { getSearch(st, mid, target) }
    }

    // 이진 탐색
    for(const data of target_arr ){
        getSearch(0, maxIndex, data);
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