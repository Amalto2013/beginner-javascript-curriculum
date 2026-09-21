// Problem 1
// Create two number variables.
// Print their quotient and remainder on separate lines.
a=10
b=3
console.log(a/b)
console.log(a%b)


// Problem 2
// Create variables for your favorite animal and favorite color.
// Print a sentence combining them like: "A blue tiger would be awesome!"

let animal="Dog"
let color="Red"

console.log("A Big" , color , animal , "would be an abomination.")

// Problem 3
// Use a for loop to print all the even numbers from 0 to 10 (including 10).

for (let i=0; i<=10; i++) {
    if (i%2==0) {
        console.log(i);
    }
}


// Problem 4
// Create a variable for how many push-ups you can do.
// Multiply it by 7 and print how many you could do in a week.

let p=20
console.log("I can do" , p*7 , "push-ups in 7 sets (you never do 1 set of pushups per day)")

// Problem 5
// Use a for loop to print the square of each number from 1 to 6.
// (Example: 1*1=1, 2*2=4, etc.)

for (let i=1; i<=6; i++) {
    console.log(i*i);
}