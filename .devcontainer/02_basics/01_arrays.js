/// arrays

const myArray=[0, 1, 2, 3, 4];
const arr=["shakti", "falcon"];
const newarr=new Array(1, 2, 3, 4, 5, 6);
console.log(myArray[0]);
console.log(myArray[0]);
console.log(myArray.length);
newarr.push(8);
newarr.push(7);
newarr.pop();
console.log(newarr);
newarr.unshift(9);
console.log(newarr.indexOf(6));
console.log(newarr);
console.log('\n');

//slice, splice
console.log("A", newarr);
const new1=newarr.slice(1, 3);
console.log(new1);
console.log("B", newarr);
console.log('\n');
const new2=newarr.splice(1, 3);
console.log(new2);
console.log('\n');
console.log("C", newarr);
