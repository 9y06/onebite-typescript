// void
// void -> 공허 -> 아무것도 없다.
// void는 아무것도 없다는 것을 의미한다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
// 반환값의 타입이 void인 경우에는 반환값이 없음을 의미
// 함수의 반환값 타입을 undefined로 지정할 수 있지만 진짜 함수가 undefined를 반환하게 해야 함
// 반환값이 null타입이면 안됨. 진짜 null이나 undefined를 반환하기 위해 return문을 써야 함

let a: void;
// a = 1; // 에러
// a = "hello"; // 에러
// a = {}; // 에러
a = undefined; // 오직 undefined만 할당 가능
// a = null; // 예외) strictNullChecks 옵션이 false일 때 null 할당 가능

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
// 이 함수의 반환값이 있는 거 자체가 모순이다 -> never 타입 사용
// never 타입은 모든 타입을 담을 수 없다.
// strictNullChecks 옵션이 false일 때조차 null을 담을 수 없다.
// any 타입의 값도 never 타입의 경우에는 담을 수 없다.