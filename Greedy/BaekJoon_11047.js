const answer = ([n,...arr]) => {

    let K = n.split(' ').map(Number)[1];

    // 내림차순 정렬
    const coins = arr.filter(data => data.trim()).map(Number).sort((a,b) => b-a);

    let result = 0;

    while(K > 0){
        for(data of coins){
            if(parseInt(K / data)){
                result += parseInt(K / data);
                K = K % data;
                break; 
            }
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
        answer(input);
        process.exit();
    });