const answer = (number) => {
  const arr = Array.from({ length: number + 1 }, () => 0);

  arr[1] = 1;
  arr[2] = 1;
  arr[3] = 1;
  arr[4] = 2;
  arr[5] = 2;

  for (let index = 6; index < arr.length; index++) {
    arr[index] = arr[index - 1] + arr[index - 5];
  }

console.log(arr);

  return arr[number];
};

console.log(answer(6));
console.log(answer(12));

// https://www.acmicpc.net/problem/9461
// 다이내믹 프로그래밍은 점화식을 찾아서 리스트화 하는게 핵심