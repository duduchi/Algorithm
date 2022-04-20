const answer = (number) => {
  // 빈 리스트 만들기
  const arr = Array.from({ length: number + 1 }, () => 0);

  // 초기값 설정
  arr[1] = 1; // 2X1
  arr[2] = 2; // 1X2 1X2 , 2X1 2X1

  // 점화식 기반 계산값 적용
  for (let index = 3; index < arr.length; index++) {
    arr[index] = arr[index-1] + arr[index-2];      
  }

  // 특정 계산값을 리스트에서 추출하기
  const answer = arr[number];

  return answer % 10007;
};

console.log(answer(2));
console.log(answer(9));

// https://www.acmicpc.net/problem/11726
// 다이내믹 프로그래밍은 점화식을 찾아서 리스트화 하는게 핵심