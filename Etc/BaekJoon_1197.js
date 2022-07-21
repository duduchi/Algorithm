const answer = ([data,...line]) => {

    const [n,m] = data.split(" ").map(Number);
    const arr = line.map(list => list.split(' ').map(Number))

    let answer = 0;
    const checked = [null];
    const nodes = [null];
    for (let index = 0; index < n; index++) {
        checked.push(false);        
        nodes.push([]);
    }

    arr.forEach((data) => {
        nodes[data[0]].push([data[2],data[1]]);
        nodes[data[1]].push([data[2],data[0]]);
    })

    const heap=[[0,1]];

    while(heap.length){
        heap.sort((a,b) => a[0]- b[0]);
        const [e,v] = heap.shift();
        if(checked[v] === false){
            checked[v] = true;
            answer += e;
            for (let index = 1; index < nodes.length; index++) {
                nodes[index].forEach(data => {
                    if(checked[data[1]] === false){
                        heap.push(data);
                    }
                })
            }
        }
    }

    console.log(answer)

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