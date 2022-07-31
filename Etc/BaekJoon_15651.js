const answer = ([data]) => {

    const [n,m] = data.split(' ').map(Number);

    const rs = [];

    const setData = (num) => {
        if(num === m){
            console.log(rs.join(' '));
            return;
        }
        for (let index = 1; index <= n; index++) {
            rs.push(index);
            setData(num + 1);
            rs.pop();            
        }
    }

    setData(0);

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