/*
15650 문제와 15651 문제를 합친 문제와 같다.
오름차순 조건과 중복 허용 조건을 같이 적용.
*/

const answer = ([data]) => {
    const [n,m] = data.split(' ').map(Number);

    const rs =[];


    const setData = (num) => {
        if(rs.at(-1) < rs.at(-2)){
            return;
        }
        if(num === m){
            console.log(rs.join(' '));
            return;
        }

        for (let index =1; index <= n; index++) {
            rs.push(index);
            setData(num + 1);
            rs.pop();            
        }
    }

    setData(0)

}

const input = [];
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
    input.push(line);
}).on('close', () => {
    answer(input);
    process.exit();
})