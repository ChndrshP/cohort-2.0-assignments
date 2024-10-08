/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function timeToCalculateSum(n) {
    let startTime = new Date().getTime();  // Get the current time in milliseconds
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let endTime = new Date().getTime();  // Get the current time in milliseconds again
    let timeTaken = endTime - startTime;  // Calculate the difference in milliseconds
    return timeTaken / 1000;  // Convert milliseconds to seconds
}

console.log("Time to calculate sum from 1 to 100:", timeToCalculateSum(100), "seconds");
console.log("Time to calculate sum from 1 to 100000:", timeToCalculateSum(100000), "seconds");
console.log("Time to calculate sum from 1 to 1000000000:", timeToCalculateSum(1000000000), "seconds");