// 제네릭

// 제네릭 함수
function func<T>(value: T): T  {
  return value
}

let num = func(10)
let str = func("HELLO")
let bol = func(true)
let arr = func<[number, number, number]>([1, 2, 3])