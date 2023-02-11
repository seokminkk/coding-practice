/**저주의 숫자 3
문제 설명
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
 3x 마을 사람들의 숫자는 다음과 같습니다.

10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
1	1	6	8
2	2	7	10
3	4	8	11
4	5	9	14
5	7	10	16
정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔
 return하도록 solution 함수를 완성해주세요. */

function solution(n: number) {
  let x3 = 0;
  for (let i = 1; i <= n; i++) {
    x3++;
    while (x3.toString().includes("3") || x3 % 3 === 0) {
      x3++;
    }
  }
  return x3;
}

console.log(solution(40));

/**
다항식 더하기
문제 설명
한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
  동류항끼리 더한 결괏값을 
문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 
가장 짧은 수식을 return 합니다.
 */

// function solution2(polynomial: string) {
//   const arr = polynomial.split(" + ");
//   const xNum = arr
//     .filter((n) => n.includes("x"))
//     .map((n) => n.replace("x", "") || "1")
//     .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
//   const num = arr
//     .filter((n) => !isNaN(Number(n)))
//     .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

//   let answer: Array<string | number> = [];
//   if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
//   if (num) answer.push(num);

//   return answer.join(" + ");
// }

function solution2(p: string) {
  let [x, c]: Array<string | number> = p.split("+").reduce(
    ([a, b], s) => {
      if (s.includes("x")) {
        return [a + Number(s.trim().replace("x", "") || 1), b];
      }
      return [a, b + Number(s)];
    },
    [0, 0]
  );

  if (!x && !c) return "0";

  if (!x) return c.toString();

  x = `${x == 1 ? "" : x}x`;

  if (!c) return x;

  return `${x} + ${c}`;
}

console.log(solution2("3x + 7 + x"));
console.log(solution2("x + x + x"));
