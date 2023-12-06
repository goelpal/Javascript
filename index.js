let number={x:5, y:10, z:-2};

/*
let x = number.x;
let y = number.y;
let z = number.z;

document.write(x, " ", y, " ", z);

console.log(x);
console.log(y);
console.log(z);*/

//Destructuring with objects- Assign data to variable

let {x,y,z} = number;

console.log(x);
console.log(y);
console.log(z);

document.write(x, " ", y, " ", z);

const arr = [1,2,3,4,5];
const [q,,r] = arr;
const[p,,,s] = arr;

console.log(q,r); //getting only first two values from array called destructuring(q,r)
//getting first and third value (q,,r)

console.log(p,s);

//Rest or spread operator - three dot operator

const [c,d,...rest] = [1,2,3,4,5,6];
console.log(c,d);
console.log(...rest);

rest.forEach(element => {
    console.log(element);
})



