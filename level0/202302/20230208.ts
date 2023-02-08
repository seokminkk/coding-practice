/**
 * 등수 매기기
문제 설명
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 
함수를 완성해주세요.

 */

function solution(score: Array<Array<number>>) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);

  let sorted = avg.slice().sort((a, b) => b - a);

  return avg.map((v) => sorted.indexOf(v) + 1);
}

// console.log(
//   solution([
//     [80, 70],
//     [90, 50],
//     [40, 70],
//     [50, 80],
//   ])
// ); //1243

// console.log(
//   solution([
//     [80, 70],
//     [70, 80],
//     [30, 50],
//     [90, 100],
//     [100, 90],
//     [100, 100],
//     [10, 30],
//   ])
// );

/**
문자열 밀기
문제 설명
문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면
 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
  A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 r
eturn하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 */

// function solution2(A: string, B: string) {
//   var answer = 0;

//   if (A === B) {
//     return 0;
//   }

//   let plusstr = A;

//   for (let i = 0; i < A.length; i++) {
//     plusstr =
//       plusstr.substring(A.length - 1) + plusstr.substring(0, A.length - 1);

//     if (plusstr === B) {
//       return i + 1;
//     } else {
//       answer = -1;
//     }
//   }

//   return answer;
// }

let solution2 = (a: string, b: string) => (b + b).indexOf(a);

console.log(solution2("hello", "ohell"));
console.log(solution2("apple", "elppa"));
console.log(solution2("atat", "tata"));
console.log(solution2("abc", "abc"));
