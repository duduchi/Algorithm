const fibo = (number) => {
  const arr = Array.from({ length: number + 1 }, () => 0);

  arr[0] = 0;
  arr[1] = 1;

  for (let index = 2; index < arr.length; index++) {
        arr[index] = arr[index-1] + arr[index-2];      
  }

  console.log(arr);
  return arr[number];
};

console.log(fibo(10));

// 동적계획법(Dynamic Programming) 을 이용하여 arr 배열에 결과값을 미리 Memoization(메모리제이션) 해 놓는다.
// F(0) = 0 
// F(1) = 1
// F(n) = F(n-2) + F(n-1)