// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일 결과 사라지지 않고 자바스크립트의 객체로 변환됨
enum Role {
  ADMIN, // 숫자를 지정하지 않아도 위에서 부터 0, 1, 2로 자동으로 부여됨
  USER,
  GUEST,
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
}

const user1 ={
  name: "서진교",
  role: Role.ADMIN, // 0: 관리자
  language: Language.KOREAN
};
const user2 ={
  name: "홍길동",
  role: Role.USER // 1: 일반유저
};
const user3 ={
  name: "김진교",
  role: Role.GUEST // 2: 게스트
};

console.log(user1, user2, user3);