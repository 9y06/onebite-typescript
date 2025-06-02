// 선언 합침

interface Person {
  name: string
}

interface Person {
  // name: number // 똑같은 프로퍼티 정의에 타입을 다르게 하면 오류
  name: string
  age: number
}

// 동일한 이름으로 두 개의 인터페이스를 정의해도 오류가 나지 않는다 => 선언 합침

const person: Person = {
  name: "",
  age: 1
}

interface Developer extends Person {
  name: "hello"
}

// 모듈 보강
interface Lib {
  a: number,
  b: number
}

interface Lib {
  c: string
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
}