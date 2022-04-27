const answer = (N) => {
    const dp = Array.from({ length: N + 1 }, () => new Array(10));

    dp[1] = [0,1,1,1,1,1,1,1,1,1];
    dp[2] = [1,1,2,2,2,2,2,2,2,1];
    
    for (let index = 3; index <= N; index++) {
        for (let index2 = 0; index2 < 10; index2++) {
            if(index2 === 0){
                dp[index][index2] = dp[index-1][index2+1] % 1000000000
            }
            else if(index2 === 9){
                dp[index][index2] = dp[index-1][index2-1] % 1000000000
            }
            else{
                dp[index][index2] = (dp[index-1][index2-1] + dp[index-1][index2+1]) % 1000000000
            }
        }        
    }

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += dp[N][i]        
    }

    console.log(sum % 1000000000)

}

const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line);
    })
    .on("close", () => {
        answer(Number(input));
        process.exit();
    });


// 배열에 뒷자리가 0~9까지 가능한 숫자의 갯수를 넣는다.
// 초기값 선언
// dp[1] = [0,1,1,1,1,1,1,1,1,1];
// dp[2] = [1,1,2,2,2,2,2,2,2,1];
// 숫자의 길이가 3이면서 뒷자리가 0인것은 숫자의 길이가 2이면서 뒷자리가 1인 경우 => dp[2]의 0번째 갯수

// 숫자의 길이가 3이면서 뒷자리가 1인것은 숫자의 길이가 2이면서 뒷자리가 0,2 인 경우 => dp[2]의 0번 째와 2번째 갯수 더하기
// 숫자의 길이가 3이면서 뒷자리가 2인것은 숫자의 길이가 2이면서 뒷자리가 1,3 인 경우 => dp[2]의 1번 째와 3번째 갯수 더하기
// 1 ~ 8까지 위의 상황 반복

// 숫자의 길이가 3이면서 뒷자리가 9인것은 숫자의 길이가 2이면서 뒷자리가 8 인 경우 => dp[2]의 8번째 갯수
 