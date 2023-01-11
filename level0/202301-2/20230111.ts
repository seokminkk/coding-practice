// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array: Array<number>) {
  let max = Math.max(...array);

  return [max, array.indexOf(max)];
}
// console.log(solution([5, 7, 3, 8]));

// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
//  배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
function solution1(numbers: number[], direction: string) {
  var answer: Array<number> = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop()!);
  } else {
    numbers.push(numbers.shift()!);
  }

  answer = numbers;

  return answer;
}

// console.log(solution1([1, 5, 2], "le"));

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution3(numbers: Array<number>) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

console.log(solution3([-3, -20, 0, 3, 8]));
