const score=400;
console.log(score);

const balance=new Number(500);
console.log(balance);
console.log(typeof (balance));

console.log(balance.toString().length);
console.log(typeof (balance));
console.log(balance.toFixed(2));

const no=12343.548393;
console.log(no.toPrecision(4));

const hundreds=1000000000;
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

//********************   maths   *************************

console.log(Math); 
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.round(7.98));
console.log(Math.ceil(7.98));
console.log(Math.floor(7.98));
console.log(Math.pow(7.98, 2));
console.log(Math.max(7.98, 2, 0, 84, 92));
console.log(Math.min(7.98, 2, 0, -34));
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);

const min=1;
const max=6;
console.log(Math.floor(Math.random()*(max-min+1)+min));