// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //  업캐스팅
// b = a; // Error: Type 'A' is not assignable to type 'B'. Type 'number' is not assignable to type '10'.
// 반환값끼리의 다운캐스팅 안됨

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅 에러
d = c; // 다운캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅
dogFunc = animalFunc; // 다운캐스팅 에러

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // Error: Property 'color' does not exist on type 'Animal'.
};
// 매개변수를 기준으로 호환성을 판단할 때(반환값의 타입이 같을 때): 업캐스팅이 안된다. 다운캐스팅은 됨

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 업캐스팅
// func2 = func1; // Error: Type 'Func1' is not assignable to type 'Func2'. Type '(a: number, b: number) => void' is not assignable to type '(a: number) => void'.
// 매개변수의 개수가 다를 때는 업캐스팅이 가능하다.
// 매개변수의 개수가 다를 때는 다운캐스팅이 안된다.