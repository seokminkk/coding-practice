/**
 * 소인수분해
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 
 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(n: number) {
  let result: Array<number> = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else divisor++;
  }

  return [...new Set(result)];
}

// console.log(solution(420));

/**
 * 영어가싫어요
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
 * 문자열 numbers가 매개변수로 주어질 때,
 *  numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

 */
function solution2(numbers: string) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < num.length; i++) {
    numbers = numbers.split(num[i]).join(`${i}`);
  }

  return Number(numbers);
}

console.log(solution2("onefourzerosixseven"));
console.log(solution2("onetwothreezerofourfivesixseveneightnine"));
