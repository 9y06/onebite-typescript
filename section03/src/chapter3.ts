// unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; // Error: Type 'unknown' is not assignable to type 'number'.
  // let str: string = unknownVar; // Error: Type 'unknown' is not assignable to type 'string'.
  // let bool: boolean = unknownVar; // Error: Type 'unknown' is not assignable to type 'boolean'.
}

// never 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

    // let nener1: never = 10; // Error: Type 'number' is not assignable to type 'never'.
    // let nener2: never = 'hello'; // Error: Type 'string' is not assignable to type 'never'.
    // let nener3: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log('This is a void function');
    return undefined; // void타입은 undefined타입의 슈퍼타입
  }
  let voidVar: void = undefined;
}

// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar; // 다운캐스팅이 됨
  // neverVar = anyVar; // 에러. never 타입에는 어떤 것도 다운 캐스팅 할 수 없음
}