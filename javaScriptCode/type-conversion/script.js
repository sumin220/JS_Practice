let val;

//number to String
val= String(111)
val = String (8+4)

//Boolean to String
val = false;
val = String(true);

//Date to String
val = new Date();
val = String(new Date());

//Array to String
val = [1,2,3,4];
val = String([1,2,3,4]);

// toString()
val = (5).toString();

//String to Number
val = Number('5');
val = Number(true)
val = Number(false)
val = Number('hello')
//NaN = Not a Number

console.log(val);
console.log(typeof val)
console.log(val.length);

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum)
