// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {;
  value;
  // value.toUpperCase(); // 에러
  // value.toFixed(); // 에러

  if (typeof value === 'number') { // <- 타입 가드
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // date 객체인가
    console.log(value.getTime());
  } else if (value && 'age' in value) { // instance 우측에는 클래스만 올 수 있다. 객체 타입은 올 수 없다. 
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}