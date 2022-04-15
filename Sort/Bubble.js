// 버블 정렬 알고리즘

const arr = [];

while (arr.length <= 50) {
  const num = Math.floor(Math.random() * 100);
  if (!arr.includes(num)) {
    arr.push(num);
  }
}

console.log("BEFORE", arr);

for (let index = 0; index < arr.length - 1; index++) {
  for (let index2 = 0; index2 < arr.length - 1 - index; index2++) {
    if (arr[index2] > arr[index2 + 1]) {
      let a = arr[index2 + 1];
      arr[index2 + 1] = arr[index2];
      arr[index2] = a;
    }
  }
}

console.log("AFTER", arr);

// 시간 복잡도는 O(n^2) 이다.
// 버블정렬 작동 방식은 https://visualgo.net/en/sorting 을 통해 시각적으로 확인이 가능.
