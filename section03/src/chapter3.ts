// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // number는 10의 슈퍼타입

// 객체 타입간의 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: "yellow",
};

let dog: Dog = {
  name: '돌돌이',
  color: "brown",
  breed: "진도"
};

animal = dog; // Animal은 Dog의 슈퍼타입
// dog = animal; // 에러. Dog는 Animal의 서브타입

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs'
};

book = programmingBook; // Book은 ProgrammingBook의 슈퍼타입
// programmingBook = book; // 에러. ProgrammingBook은 Book의 서브타입

// 초과 프로퍼티 검사
// 실제 타입에는 정의해 놓지 않은 프로퍼티를 작성하면 안 되도록 막는 검사
type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
}

let book3: Book = programmingBook;
// 초기화할 때 객체 리터럴을 사용한 건 아니기에 초과 프로퍼티 검사가 발동하지 않아서 에러가 나지 않음

function func(book: Book) {}
// func({
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",
// })
// 함수의 인수로 객체를 전달할 때도 이런 식으로 객체 리터럴을 전달하면 초과 프로퍼티 검사가 발동한다.
// 그래서 서브 타입 객체를 넣을 떄는 객체 리터럴을 이용하는 게 아니라 변수에 저장해두었다가 인수로 변수를 전달해야 한다.
func(programmingBook);