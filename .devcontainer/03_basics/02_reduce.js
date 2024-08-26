const mynums=[1,2,3,4,5];
const initialvalue=9;
const total=mynums.reduce(function (acc, curval) {console.log(acc, " ", curval); return acc+curval}, initialvalue);
console.log(total);

//same can be written with arrow function 