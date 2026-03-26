// For,
//     while,
// do while loop
// for..of
// for in
// Array.foreach() !most imp
// map() !VIP
//filter() !IMP
// reduce()
// find()
//some()
// every()

// for(let i = 0; i <= 5; i++)
// {
//     console.log(i);
// }
// const nums = [10, 20, 30, 40, 434, 3453, 343];
//
// for(let i = 1; i < nums.length; i++)
// {
//     console.log(nums[i])
// }

// let sum = 0;
// for (let i = 1; i<= 5; i++)
// {
//   // sum = sum + i;
//   sum += i;
//
// }
// console.log(sum)


// let i = 0;
// while (i < 5)
// {
//     console.log(i)
//     i++
// }
// const nums = [10, 20, 30, 40, 434, 3453, 343];
// let attempts = nums.length;
// while (attempts <= 10 )
// {
    // ATTEMPTS = 0 < 3 TRUE
    // PRINT MSG
    // +1
    // ATTEMPTS = 1 < 3 TRUE
    // +1
    // 2 < 3 TRUE
    // PRINT
    // 3 < 3 FALSE
    // console.log(nums)
//     attempts++
//     break;
// }

// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i < 2);

// print 0
// +1
// 1 < 2
// 1
// +1
// 2 < 2
// [1, 2, 3, 4]
//  0, 1, 2, 3
// array.forEach((elements, index, array)=> {
//
// });
//array method loop each element of and array and executed a function for every items.
// elements --> current items
//index --> current position (options)
// array --> orginal array (options)

// const nums = [1, 2, 3,4,5];
// nums.forEach((el, idx, arr)=> {
//     console.log(el)
//
// });
// nums.forEach(el => {
//     console.log(el)
// });

// ()=> {} more than 2 parameters

// const fruits = ['apple', "banana", "mango"]
// fruits.forEach(( elements, index) => {
//     // console.log(`Elements ${elements}, index ${index}`)
//     console.log("elements", elements);
//
// } )\
//
// name = "saroj"
// lastName = "bata"
// console.log("my name is" + " " + name + lastName);
// console.log(`my name is ${name}                        ${lastName}`)

[1, 2, 3, 4, 5].forEach(num => {
    if(num === 2) return;
    console.log(num)
})