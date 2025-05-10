// 대수타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입

// 합집합 -> union type
let a: string | number;
a = 1;
a = 'hello';
// string 타입에 포함되는 값도 넣을 수 있고, number 타입에 포함되는 값도 넣을 수 있다.

let b: string | number | boolean;
b = 1;
b = 'hello';
b = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};
// dog 타입

let union2: Union1 = {
  name: '',
  language: '',
};
// person 타입

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};
// dog 타입과 person 타입의 교집합 타입

// let union4: Union1 = {
//   name: '',
// };
// 에러.
// color가 없어서 dog 타입이 아니고
// language가 없어서 person 타입이 아님
// dog 타입과 person 타입의 교집합 타입이 아님


// 교집합 타입 Intersection 타입
let variable: string & number;
// string 타입과 number 타입의 교집합 타입
// never 타입

type Intersection = Dog & Person;

let Intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
// dog 타입과 person 타입의 모든 프로퍼티를 가지는 타입