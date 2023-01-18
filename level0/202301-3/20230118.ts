/**머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
 *  n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를
 *  return 하도록 solution 함수를 완성해보세요. */

const solution = (n: number) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

// console.log(solution(7));

/**머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며
 *  3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
 *  머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를
 * return 하도록 solution 함수를 완성해보세요.
 */

function solution2(order: number) {
  let answer = 0;

  let arr = [...`${order}`];
  let arr2 = arr.filter((v) => (Number(v) === 0 ? 1 : Number(v)) % 3 === 0);
  answer = arr2.length;
  return answer;
}
// console.log(solution2(13567));

/**약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 *  자연수 n이 매개변수로 주어질 때 n이하의 합성수의
 * 개수를 return하도록 solution 함수를 완성해주세요. */

function solution3(n: number) {
  let arr: Array<Array<number>> = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr.push([]);
        arr[i]?.push(j);
      }
    }
  }

  let three = arr.filter((v) => v.length >= 3);
  return three.length;
}
// console.log(solution3(1000));
