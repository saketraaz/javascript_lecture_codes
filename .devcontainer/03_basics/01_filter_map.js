const coding = ["js", "cpp", "ruby", "python"];

const values=coding.forEach((item) => {console.log(item); return item;});
console.log(values);

// const value2=coding.forEach(function(items) {console.log(items)});
// console.log(value2);


const arr=[1,2,3,4,5,6,7,8,9]; 
const newarr=arr.filter((num) => (num>5));
console.log(newarr);

//if you use { } inside arrow fuction then you will have to use return keyword
const arrr=[1,2,3,4,5,6,7,8,9, 11, 13, 15];
const newarrr=arrr.filter((numm) => { return  numm >= 4});
console.log(newarrr);


let rev=[1, 4, 6, 8, 9];
rev=rev.map((num) => {return num+10});
console.log(rev);

const a=[4, 56,7, 8,9,0];
const b=a.map((num) => num*5).map((nums)=>(nums+9)).filter((num)=>num>=40);
console.log(b);

