/**
문자열 my_str과 n이 매개변수로 주어질 때
, my_str을 길이 n씩 잘라서 저장한 배열을 
return하도록 solution 함수를 완성해주세요.
 */

function solution(my_str: string, n: number) {
  var answer: string[] = [];

  while (my_str.length > 0) {
    answer.push(my_str.substring(0, n));
    my_str = my_str.substring(n);
  }
  return answer;
}
console.log(solution("abc1Addfggg4556b", 6));

/**머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
 *  구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게
 *  나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의
 *  구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요. */

//부동소수점 떄메 Math.round
const 팩토리얼 = (num: number): number =>
  num === 0 ? 1 : num * 팩토리얼(num - 1);

function solution2(balls: number, share: number) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}
console.log(solution2(10, 6));

console.log(0.1 + 0.2);
