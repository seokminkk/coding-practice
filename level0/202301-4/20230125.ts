/**문자열 s가 매개변수로 주어집니다.
 *  s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록
 *  solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 *
 */

function solution(s: string) {
  let res: Array<string> = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

// console.log(solution("hello"));

/**문자열 my_string이 매개변수로 주어집니다.
 * my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
 *  my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.*/

function solution2(my_string: string) {
  var answer = 0;
  let arr = [...my_string];
  let spaceArr = arr.map((el) => {
    return Number(el);
  });

  let joinspace = spaceArr.join("");

  let split = joinspace.split("NaN");
  for (let i = 0; i < split.length; i++) {
    answer += Number(split[i]);
  }
  return answer;
}

// console.log(solution2("1a2b3c4d123Z"));

/**머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
 *  공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
 *  친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
 * k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

 */
function solution3(numbers: Array<number>, k: number) {
  var answer = 0;
  answer = numbers[((k - 1) * 2) % numbers.length];

  return answer;
}
// console.log(solution3([1, 2, 3, 4], 2));

// console.log(solution3([1, 2, 3, 4, 5, 6], 5));

console.log(solution3([1, 2, 3], 3));
