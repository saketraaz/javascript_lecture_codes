//singleton
//Object.create

//object literals

const mysym=Symbol("key");
const jsuser=
{
    name : "saket",
    age: 23,
    [mysym]: "keys",
    email:"saket@google.com",
    day: "monday"
}

console.log(jsuser.name);
console.log(jsuser['email']);
console.log(jsuser['age']);
console.log(jsuser['mysym']);

//Object.freeze(jsuser);
jsuser.email="aass@123";
console.log(jsuser);


jsuser.greeting = function()
{
    console.log("Hello JS user");
}
jsuser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());