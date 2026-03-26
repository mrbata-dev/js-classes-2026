// // functions in js
// /**
//  * There are three types functions in JS
//  * arrow function
//  * normal function
//  * veriable function
//  *
//  * */
//
// function getMessage () {
//     return "hello world"
// }
//
// console.log(getMessage())
//
// const getPassword = function () {
//     return "your password retrun from here"
// }
// getPassword();
//
// //arrow function
// // const getName = (parm) => {
// //     console.log(parm)
// // }
// // getName("saroj")
// // getName("Ram")
//
// // addations
// const add = (a, b) => {
//     return a + b;
// }
// let result = add("saroj",2);
// console.log(result)
//
//
//
// const result = function() {
// //     logic
// }
//
// //Arrow function
// const addName = (a, b) => {
// // logic
// }
//
//

// username/email
// password

const login = (email, password)=> {
//     LOGIC GOES HERE
    if(!email || !password) {
        return("All Fields are required!")
    }
    const oldEmail = "saroj@gmail.com"
    const oldPassword = "admin@123"

   //  if(oldEmail !== email) {
   //      return ("Email Invalid!")
   //  }
   // else if(oldPassword !== password)
   //  {
   //      return ("Password Invalid!")
   //  }
   // return ("login successfully!")

   //  if(oldEmail === email)
   //  {
   //      if( oldPassword === password)
   //      {
   //          return ("login successfull!")
   //      }
   //      else{
   //          return ("password not match!")
   //      }
   //  }
   //  else {
   //      return ("login FAiled!")
   //  }

  const isLogin =   (oldEmail !== email && oldPassword !== password) ? "login Failed!" : "logind success!";
    return  isLogin;
 }

const input = login("saroj@gmail.com", "admin@123");
console.log(input);

