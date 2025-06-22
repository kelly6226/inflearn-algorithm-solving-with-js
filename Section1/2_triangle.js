#!/usr/bin/env node

function solution(A, B, C) {
  const length = [A, B, C];
  let longest = Math.max(...length);

  const sum = length.reduce((acc, num) => acc + num, 0);

  return longest < sum - longest ? "YES" : "NO";
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO
