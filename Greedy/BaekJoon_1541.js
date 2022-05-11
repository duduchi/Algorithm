const answer = ([input]) => {

    // - 를 기준으로 split하여 뺄 수 있는 수를 구분한다
    // 55-50+45-20-10+30 => [55,50+45,20,10+30]
    const numbers = input.split('-').map(data =>
        // +로 되어있는 수를 split(+)하고 reduce를 통하여 더한다.
        // [55,50+45,20,10+30] => [55,95,20,40]
        data.split("+").map(Number).reduce((a, b) => a + b, 0)
    );

    // 처음에 split(-)를 하였던 거여서 첫번째 수-(두번째 수 부터 나머지 수 모두 더한 값)을 한다.
    const firstNumber = numbers.shift();
    const minusNumber = numbers.reduce((a, b) => a + b, 0);

    console.log(firstNumber - minusNumber);
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