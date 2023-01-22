/** i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
 *  예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
 * 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록
 *  solution 함수를 완성해주세요*/

// wile문은 참일때만돌아가고 거짓일때 멈춤
function solution(n: number) {
  var answer = 1;
  let i = 1;
  while (answer <= n) {
    i++;
    answer = answer * i;
  }
  console.log(answer);

  return i - 1;
}

/** 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
 * num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로
num_list를 2 * 4 배열로 다음과 같이 변경합니다.
2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.*/
function solution2(num_list: Array<number>, n: number) {
  var answer: Array<Array<number>> = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

console.log(solution2([100, 95, 2, 4, 5, 6, 18, 33, 948, 66], 3));
