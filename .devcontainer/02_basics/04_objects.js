//singleton object

const obj=new Object();
obj.id="123abc";
obj.name="saket";
obj.none=12;

console.log(obj);

const reg=
{
    email: "saket@123",
    fullname:
    {
        user:
        {
            key:"saketraj"
        }
    }
}

console.log(reg.fullname.user.key);



const obj1=
{
    1:'a', 2:'b'
}

const obj2=
{
    3:'c', 4:'d'
}

const obj3=Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4={...obj1, ...obj2}; 
console.log(obj4);


//to get alll the keys of any object

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


console.log();