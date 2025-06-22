function solution(N) {
  let result = 0;
  for (i = 0; i < N + 1; i++) {
    result += i;
  }
  return result;
}

console.log(solution(6)); //21
console.log(solution(10)); //55
