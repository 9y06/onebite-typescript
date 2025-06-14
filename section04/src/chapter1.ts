// 함수 타입 표현식
// 타입 별칭을 이용해서 함수 타입을 표현할 수 있다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: (a: number, b: number) => number = (a, b) => a / b; // 이렇게 해도 Ok

// 호출 시그니처(콜 시그니처)
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b; // 이렇게 해도 Ok
