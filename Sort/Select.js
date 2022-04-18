// 선택 정렬 알고리즘

const arr = [];

while (arr.length <= 50) {
  const num = Math.floor(Math.random() * 100);
  if (!arr.includes(num)) {
    arr.push(num);
  }
}

console.log("BEFORE", arr);


for (let index = 0; index < arr.length; index++) {
    let lowestIndex = index;
    for (let index2 = index + 1; index2 < arr.length; index2++) {
        if(arr[lowestIndex] > arr[index2]){
            lowestIndex = index2
        }
    }
    const temp = arr[lowestIndex];
    arr[lowestIndex] = arr[index];
    arr[index] = temp;
}

console.log("AFTER",arr);

// 시간 복잡도는 O(n^2) 이다.
// 선택정렬 작동 방식은 https://visualgo.net/en/sorting 을 통해 시각적으로 확인이 가능.
