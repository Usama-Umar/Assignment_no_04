//Assignment for the week:

//Assignment No 02 Start;

//Question No 01
//Develop a program that calculates and prints the sum of the first n (15) even numbers using a for loop.
console.log(`Question No 01: `);

var sum: number = 0;
for (let i: number = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        console.log(`${i}`);
    }
}
console.log(`Sum of  all Even Numbers are ${sum}`);
console.log(sum);
//------------------


//Qustion no 02
// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
console.log(`Question No 02: `);

var num: number[] = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 7, 9];
var numms:number[] =[];
for (let i: number = 0; i <= num.length; i++) {
    num[i]
    if (num[i] % 2 == 0) {
        numms.push(num[i]);
    }
}

console.log(`Only Even Numbers: `,numms);



//------------------

//Qustion no 03
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
console.log(`Question No 03: `);

var nums: number[] = [1, 2., 3];
var num: number[] = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 7, 9];
for (let i: number = num.length; i >= 0; i--) {
    num[i];
    if ((num[i] % 2 != 0)) {
        num.splice(i, 1);


    }
}
console.log(`Odd numbers are`, num);

//------------------

//Qustion no 04
// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
console.log(`Question No 04: `);

function areaCal(r: number) {
    var area: number = 2 * 3.1416 * r;
    console.log(`Area of the circle`, area);
}
areaCal(2);

//------------------


//Qustion no 05
// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
console.log(`Question No 05: `);

var nums: number[] = [85, 65, 45, 89, 87, 20, 15, 65];
for (let i = nums.length; i >= 0; i--) {
    nums[i];
    if (nums[i] < 50) {
        nums.splice(i, 1);

    }
}
console.log(`Remove failing grades from array`, nums);

//------------------


//Qustion no 06
// - Write a program that uses a function to find the largest element in an array of numbers. 
console.log(`Question No 06: `);

var nums: number[] = [3, 2, 1, 5, 7, 9]
function maxfun() {
    let maximumValue: number = Math.max(...nums);
    console.log(maximumValue);


}
maxfun()

//------------------

