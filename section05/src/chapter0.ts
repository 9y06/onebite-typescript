// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  // 오버로드 시그니처 정의
  sayHi(): void; 
  sayHi(a: number, b: number): void;

  // 함수타입 표현식으로 정의 => 오류
  // sayHi: () => void; 
  // sayHi: (a: number, b: number) => void;

// 메서드 오버로딩을 구현하고 싶으면 호출 시그니처를 사용해야 한다.
}

const person: Person = {
  name: "서진교",
  age: 14,
  sayHi: function() {
    console.log("hi")
  }
}

// person.name = '서진교아님'
person.sayHi();
person.sayHi(1, 2);