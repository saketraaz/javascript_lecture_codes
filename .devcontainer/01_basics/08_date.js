let mydate=new Date();
console.log(mydate.toLocaleString());
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(typeof mydate);

let mynewdat=new Date(2001, 08, 21);
console.log(mynewdat.toDateString());
console.log(mynewdat.toLocaleString());

//timestamp

let exact=(Date.now());
console.log(exact);
console.log(mynewdat.getTime());

console.log("\n");
console.log("\n");
let newDate=new Date(2015, 3, 18);
console.log(newDate.getMonth());
console.log(newDate.getDay());