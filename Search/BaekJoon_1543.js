const answer1  = (data) => {

    let originalData = data[0];
    const searchData = data[1];

    let result = 0;
    let index = 0;

    while(index !== -1){
        index = originalData.indexOf(searchData);
        if(index !== -1){
            result +=1;
            originalData = originalData.substring(index+searchData.length,originalData.length +1)
        }
    }

    console.log(result);
}

const answer2 = (data) => {

    const originalData = data[0];
    const searchData = data[1];

    let result = 0;
    let index = 0;
    const searchDataLength = searchData.length;

    while(originalData.length - index >= searchDataLength ){
        // 찾으려는 문자열이 맞으면 문자열의 길이만큼 index 추가
        if(originalData.substr(index,searchDataLength) === searchData){
            result += 1;
            index += searchDataLength;
        }
        // 찾으려는 문자열이 아니면 +1 만큼 index 추가
        else{
            index += 1;
        }
    }

    console.log(result);
}

const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line);
    })
    .on("close", () => {
        answer2(input);
        process.exit();
    });