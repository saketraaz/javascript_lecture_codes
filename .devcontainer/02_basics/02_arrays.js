const arr1=["ironman", "thor", "cap"];
const arr2=["superman", "joker", "batman"];

arr1.push(arr2);
console.log(arr1);

//arr1.push(arr2);
console.log(arr1);
const arr3=arr1.concat(arr2);
console.log("C", arr3);
console.log('\n');
const new_heroes=[...arr1, ...arr2];
console.log(new_heroes);

let c1=100;
let c2=200;
let c3=300;
console.log(Array.of(c1, c2, c3));