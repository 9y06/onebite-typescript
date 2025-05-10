// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"]; // 요소의 타입이 number이거나 string일 수 있는 배열

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 에러
// tup1 = ["1", "2"]; // 에러

let tup2: [number, string, boolean] = [1, "hello", true];

tup1.push(1); // 에러 안남
tup1.pop(); // 에러 안남
tup1.pop(); // 에러 안남
tup1.pop(); // 에러 안남

const users: [string, number][] = [
  ["서진교", 1],
  ["김진교", 2],
  ["이진교", 3],
  ["박진교", 4],
  // [5, "최진교"], // 에러
]
// 튜플은 인덱스의 위치에 따라서 넣어야하는 값들이 이미 정해져 있고 그 순서를 지키는 것이 중요할 때 사용