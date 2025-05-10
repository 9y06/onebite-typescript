// 타입 추론
let a = 10; // 상수를 추론하듯이 넘버 리터럴 타입을 가지고 추론하는 게 아니라 범용적으로 프로그래머가 이 변수를 사용할 수 있도록 조금 더 넓은 타입으로 추론해주는 타입스크립트가 추론하는 과정을 Type 넓히기. 라고 한다.
let b = 'hello';
// 타입을 추론하는 기준은 변수의 초기값이다.
// 타입스크립트는 웬만한 변수의 타입을 추론해준다.

let c = {
  id: 1,
  name: '서진교',
  profile: {
    nickname: 'kyo',
  },
  url: ['http://kyo.com'],
}

let { id, name, profile }  = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
};
// 변수의 타입을 추론할 정보가 있으면 추론이 되고 없으면 추론이 안 됨

// 초기 값이 없는 경우: any 타입의 진화
let d; // 암묵적 any 타입. 아무런 정보가 없으니 any 타입으로 추론됨
d = 19; // number 타입으로 진화
d.toFixed(2);

d = "hello"; // string 타입으로 진화
d.toUpperCase();
// d.toFixed(2); // 에러.

const num = 10; // const로 선언된 변수는 리터럴 타입으로 추론됨
// 왜냐? num은 어차피 상수이기 때문에 10 말고 다른 값을 담을 수 없음
const str = "hello"; // "hello" 스트링 리터럴 타입

let arr = [1, "string"];
// number | string 타입