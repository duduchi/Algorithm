/*
연속된 수 끼리만 더할 수 있다.
시작값부터 하나씩 더해 가며 max값을 갱신하고, max값 보다 작을 때에는 다음 턴으로 넘어간다.
*/

const answer = ([n,data]) => {
    const list = data.split(' ').map(Number);
    const arr = Array.from({length : n},()=>[])

    list.forEach((value,index) => {
       arr[index][0] = value; 
    });

    for (let i = 0; i < list.length; i++) {
        for (let j = i+1; j < list.length; j++) {
            arr[i].push(arr[i].at(-1) + list[j]);
        }
    }

    console.log(arr)

    const rs = []
    for (let index = 0; index < arr.length; index++) {
        rs.push(Math.max(...arr[index]))
    }

    console.log(Math.max(...rs));
}

const input = [];
require('readline').createInterface(process.stdin, process.stdout).on('line', (line) => {
    input.push(line);
}).on('close', () => {
    answer(input);
    process.exit();
})