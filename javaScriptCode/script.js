var A = 1;
console.log(A);

var greeting = 'Hello';
console.log(greeting);

var greeting = 'Bonjour';
console.log(greeting);

greeting = 'Hola';
console.log(greeting);

//자요도가 높지만 var는 사용 안 함


//중복 선언 불가, 재할당은 가능
let greeting = 'Hello';
console.log(greeting);

greeting = 'Bonjour';
console.log(greeting);

greeting = 'Hola';
console.log(greeting);


//중복 선언, 재할당 모두 불가능
const greeting = 'Hello';
console.log(greeting);

//greeting = 'Bonjour'; // Error: Assignment to constant variable.