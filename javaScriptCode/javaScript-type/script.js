let foo = 42
foo = 'bar'
foo = true

console.log(typeof foo);

// 원시 타입
// 문자열 String
const name = "han"
// Number
const age = 30;
//Boolean
const hasJob = true;
// null
const car = null;
//undefined
let anthing;

//Symbol
const sym = Symbol();

//참조 타입

// Array 배열
const hobbies = ['walking', 'boks'];
// Object 객체
const address = {
    province: '경기도',
    city:'성남시'
}

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasJob);
console.log(typeof car);
console.log(typeof anything);
console.log(typeof address);
console.log(Array.isArray(hobbies));