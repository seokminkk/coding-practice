/**
 * 로그인 성공?
문제 설명
머쓱이는 프로그래머스에 로그인하려고 합니다.
 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
  다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만
 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
 */

function solution(id_pw: string[], db: string[][]) {
  const [id, pw] = id_pw;

  if (!db.find(([e]) => e === id)) return "fail";
  return db.find(([_id, _pw]) => _id === id && _pw === pw)
    ? "login"
    : "wrong pw";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);

/**치킨 쿠폰
문제 설명
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록
  solution 함수를 완성해주세요. */

//while문
function solution2(chicken: number) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(`${coupon / 10}`);
    coupon = parseInt(`${coupon / 10}`) + (coupon % 10);
  }

  return answer;
}
console.log(solution2(1081));

//재귀
function solution3(chicken: number) {
  const order = (coupons: number): number => {
    if (coupons < 10) return 0;
    const service = Math.floor(coupons / 10);
    return service + order(service + (coupons % 10));
  };
  return order(chicken);
}
console.log(solution3(1081));
