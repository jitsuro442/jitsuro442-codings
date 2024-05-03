
// const UserDetails = {
//     Myname : "SurJit Halder",
//     Age : 24 ,
//     Adress : "Kolkata" ,
//     Email : "jitsuro442@gmail.com",
//     LoginStatus : true ,
//     LoginHistory : [ " Monday ", "Saturday"]
// }

// console.log( UserDetails["Myname"])
// console.log( UserDetails["Age"])
// console.log( UserDetails["Adress"])
// console.log( UserDetails["LoginStatus"])




const tinderUser = {}

tinderUser.ID = "123abc"
tinderUser.Name = "surojit"
tinderUser.Number = 9330304337
tinderUser.IsLogedin = false
tinderUser.Adress = "kol-127"
// console.log(tinderUser)





const otherUser = {

    Email: "other@gmail.com",
fullname: {
        userfullname: {
            firstname: "surojit",
            secondname: "halder"
        }
    }


}

// console.log(otherUser.fullname );









const obj1 ={1: "a", 2: "b" }
const obj2 ={3: "a", 4: "b" }
const obj4 ={5: "a", 6: "b" }


// const obj4=(obj1 , obj3)

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);
 
// const obj3 ={...obj1,...obj2}

// console.log(obj3)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



console.log(tinderUser.hasOwnProperty('ID'));
console.log(tinderUser.hasOwnProperty('email'));
console.log(tinderUser.hasOwnProperty('Name'));
console.log(tinderUser.hasOwnProperty('Number'));