// 삽입 정렬 알고리즘

const arr = [];

while (arr.length <= 50) {
  const num = Math.floor(Math.random() * 100);
  if (!arr.includes(num)) {
    arr.push(num);
  }
}

console.log("BEFORE", arr);

for (let index = 0; index < arr.length - 1; index++) {
  for (let index2 = index + 1; index2 >= 0; index2--) {
    if (arr[index2 - 1] > arr[index2]) {
      let a = arr[index2 - 1];
      arr[index2 - 1] = arr[index2];
      arr[index2] = a;
    } else {
      break;
    }
  }
}

console.log("AFTER", arr);

// 시간 복잡도는 O(n^2) 이다.
// 삽입정렬 작동 방식은 https://visualgo.net/en/sorting 을 통해 시각적으로 확인이 가능.
