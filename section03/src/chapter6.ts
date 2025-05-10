// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "서진교";
person.age = 12;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 값의 타입을 직접 단언할 수 있다.

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함.

let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입
// let num3 = 19 as string; // 에러. number와 string타입은 겹치는 부분이 없다.
let num3 = 10 as unknown as string // 다중 단언.

// const 단언
let num4 = 10 as const;
// const로 선언한 것과 동일한 효과를 보도록 만들어줌

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// const 단언은 프로퍼티의 값을 수정할 수 없는 객체가 됨.
// 모든 프로퍼티를 read-only 프로퍼티로 만들 수 있음

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "서진교"
};

const len: number = post.author!.length; // 에러. 옵셔널 체이닝을 쓰고 있어서 값이 Undefined가 될 수 있어서 단언을 할 수 없음. 느낌표를 붙이면 값이 무조건 있다고 전달
// 옵셔널 체이닝. author라는 프로퍼티가 없으면 값 전체를 undefined가 되도록 만들어주는 연산자
