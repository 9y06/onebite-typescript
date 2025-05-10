// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
let anyVar: any = 10;
// anyVar = "hello"; // 에러 안남
// anyVar = true; // 에러 안남
// anyVar = null; // 에러 안남
// anyVar = undefined; // 에러 안남
// anyVar = []; // 에러 안남
// anyVar = {}; // 에러 안남
// anyVar = () => {}; // 에러 안남
// anyVar.toFixed(2); // 에러 안남
// anyVar.toUpperCase(); // 에러 안남

let num: number = 10;
num = anyVar; // 에러 안남. 모든 타입의 값을 할당 받을 수 있고 모든 타입의 값에 할당할 수 있음.
// 타입 검사를 안 함. 최대한 사용하지 않는 것이 좋음

// unkwown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 10;
unknownVar = () => {};

// unknwn 타입은 모든 타입을 저장할 순 있지만 모든 타입의 변수에 할당할 수 없다.
// unknownVar.toFixed(2); // 에러
// 연산도 불가능

if (typeof unknownVar === "number") {
  num = unknownVar;
}
// 타입 정제
// 런타임 에러를 일으키는 any보다 더 안전한 타입