// var A = 1;
// console.log(A);

// var greeting = 'Hello';
// console.log(greeting);

// var greeting = 'Bonjour';
// console.log(greeting);

// greeting = 'Hola';
// console.log(greeting);

//자요도가 높지만 var는 사용 안 함


//중복 선언 불가, 재할당은 가능
// let greeting = 'Hello';
// console.log(greeting);

// greeting = 'Bonjour';
// console.log(greeting);

// greeting = 'Hola';
// console.log(greeting);


//중복 선언, 재할당 모두 불가능
// const greeting = 'Hello';
// console.log(greeting);
//greeting = 'Bonjour'; // Error: Assignment to constant variable.

// //var 함수 레벨 스코프  
// function func() {
//     if (true) {
//     var a = 'a';
//     console.log(a);
// }
// console.log(a); // a
// }
// // console.log(a); // undefined
// func();


//let, const 함수 블록 레벨 스코프

// function func() {
//     if(true) {
//     let a = 3;
//         console.log(a);
//     }
// }
// func();

// function func2() {
//     if(true) {
//         const b = 4;
//         console.log(b);
//     }

// }   

// func2();

// console.log(greeting);

// // var greeting = 'Hello';
// let greeting = 'Bonjour';

func();

function func() {
    console.log('hoisting test');
}

func();