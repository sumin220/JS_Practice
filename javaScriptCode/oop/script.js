// class PaymentGateway{
//     constructor() {
//         this.connect();
//     }
//     connect() {
//         //경제 제공업체에 연결
//         // ..
//     }
//     pay(amount) {
//         // ..
//     }
//     refund(amount) {
//         // ..
//     }
// }

// class Paypal extends PaymentGateway {
//     pay(amount) {
//         // 페이팔 전용 로직
//     }
//     refund(amount) {
//         // 페이팔 전용 로직
//     }

//     connect() {
//         // 페이팔 전용 로직
//     }
// }

// class Visa extends PaymentGateway {
//     pay(amount) {
//         // VISA 전용 로직
//     }

//     refund(amount) {
//         // VISA 전용 로직
//     }

//     connect() {
//         // VISA 전용 로직
//     }
// }

// let user = {
//     name: "John",
//     age: 45
// }

// console.log(user.name);
// console.log(user.hasOwnProperty("email"));

//es6
class Person {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }