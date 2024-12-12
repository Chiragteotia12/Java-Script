//symbol always return unique value

let a = Symbol(10);
console.log(a);
let b = Symbol(10);
console.log(b);

console.log(a==b);
console.log(a===b);
console.log(typeof a);
console.log(typeof b);

let studs = ["abc", "def", "ghi"];
console.log(typeof studs);
// console.table(studs)
console.log(studs[1]);
console.log(studs[-1]);
studs.push("RAM",98); // append at last
studs.unshift("Shyam");  // added at first
console.log(studs);
studs.pop(""); //remove from end
studs.shift();  //remove from first
console.log(studs);

console.log(studs.includes("abc"));
console.log(studs.indexOf("abc"));

const abc = studs.join();
console.log(abc);

