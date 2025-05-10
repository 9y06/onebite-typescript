// 객체
// let user: object = {
//   id: 1,
//   name: "서진교",
// };

// user.id; // 에러 'id' is not a property of 'object'
// objet 타입은 그냥 이 값이 객체다라는 것 이외의 아무런 정보가 없기 때문에
// 프로퍼티나 메소드에 접근할 수 없다.

let user: {
  id?: number; // ?는 선택적 프로퍼티(옵셔널 프로퍼티) 있어도 되고, 없어도 되고
  name: string;
} = {
  id: 1,
  name: "서진교",
};
// 중괄호를 이용해 객체의 타입을 정의하는 방식을 객체 리터럴 타입이라고 한다.
user.id; // 1
user.name; // "서진교"

let dog: {
  name: string;
  color: string;
} ={
  name: "멍멍이",
  color: "white",
};
// 타입스크립트는 객체의 타입을 정의할 때 객체의 구조를 기준으로 타입을 정의한다. (프로퍼티를 기준으로 타입을 정의) -> 구조적 타입 시스템(Property-based Type System)
// 이름을 기준으로 타입을 정의하는 것 -> 명목적 타입 시스템

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY_API_KEY",
};
// 절대 값이 수정되어선 안 되는 프로퍼티가 있다면 앞에 readonly를 붙여주면 된다.
// config.apiKey = "hacked"; // 에러