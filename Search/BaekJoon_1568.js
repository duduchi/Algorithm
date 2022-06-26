const answer = (input) => {

    let treeBird = Number(input[0]);
    let flyBird = 1;
    let count = 0;

    while (treeBird) {
        if (treeBird >= flyBird) {
            treeBird -= flyBird;
            flyBird += 1;
            count += 1;
        } else {
            flyBird = 1;
        }
    }
    console.log(count);
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