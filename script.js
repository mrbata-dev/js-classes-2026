console.log("Hello World!");

//print("hello");
//printf("hello");
//system.out.println("hello");

// int, string, float

// var, --- Old way
// var name = "Saroj";
// var name = "ram";
// console.log(name);
/**
 * can be redeclared
 * Not block scoped
 * Hosting confusion
 * */
// if(true)
// {
//     var x = 10;
// }
// console.log(x)
// let,
// const

let name = "saroj";
name = "Ram";
console.log(name);
/**
 * Block scoped
 * */
if(true) {
    let x= 10;
    console.log(x)
}

// Const
const name = "Saroj";

/**
 * Cannot reassign,
 * Block scoped
 * safer
 * */

// var, let, const diffrences
// var re assign, block scoped not support,
// let resassign, block scoped,
// const can't reassign, blocked scoped

