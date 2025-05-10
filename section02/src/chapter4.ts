// 타입 별칭
// 중복 코드 제거
// 같은 스코프 내에서 동일한 이름을 가질 수 없음
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "서진교",
  nickname: "kyo", 
  birth: "2008.02.09",
  bio: "열심히 하자",
  location: "대구",
};

let user2: User = {
  id: 1,
  name: "홍길동",
  nickname: "동길홍", 
  birth: "2008.02.09",
  bio: "열심히 하자",
  location: "대구",
};

// 인덱스 시그니처
type contryCodes = {
  [key: string]:  string;
};

let contryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
// key와 value의 타입이 어떤 규칙을 가지고 움직이는 객체의 타입을 정의할 때 유용하게 사용

type contryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 Korea라는 number타입의 프로퍼티가 있어야 할 때, 추가적인 프로퍼티의 value의 타입이 반드시 인덱스 시그니처의 value의 타입과 일치하거나 호환해야함
};
// 객체 안에 아무것도 없어도 에러가 나지 않음
let contryNumberCodes: contryNumberCodes = {
  Korea: 82,
  UnitedState: 1,
  UnitedKingdom: 44,
};