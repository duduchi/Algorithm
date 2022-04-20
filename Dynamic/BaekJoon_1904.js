const answer = (number) => {
    const arr = Array.from({length : number + 1}, () => 0);

    arr[1] = 1;
    arr[2] = 2;

    for (let index = 3; index < arr.length; index++) {
        arr[index] = arr[index-1] + arr[index-2];        
    }

    console.log(arr)
    const result = arr[number] % 15746;

    return result;
}

console.log(answer(4));


// https://www.acmicpc.net/problem/1904
