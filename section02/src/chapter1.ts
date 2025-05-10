// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1.toFixed(2); // "123.00"

// string
let str1: string = "Hello";
let str2: string = 'Hello';
let str3: string = `Hello`;
let str4: string = `Hello, ${num1}`;

str1.length; // 5
str2.toUpperCase(); // "HELLO"

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null; // strict null check 옵션 false일 때는 가능

// 리터럴 타입
let numA: 10 = 10;
// 값으로 만든 타입. 숫자, 문자열, 불리언 모두 가능
let strA: "hello" = "hello";
let boolA: true = true;