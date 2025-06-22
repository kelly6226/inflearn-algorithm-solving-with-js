function solution(N) {
  return Math.trunc(N % 12 === 0 ? N / 12 : N / 12 + 1);
}

console.log(solution(25)); //3
console.log(solution(178)); //15
