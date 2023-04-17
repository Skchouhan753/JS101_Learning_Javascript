//Problem 3 : Given an array of numbers find the average of all the even numbers.
let arr=[9,4,5,8,11,21];
let sum=0;
let count=0;
let avg;
for(let i=0;i<arr.length;i++){
sum=sum+arr[i];
  count++
  // avg=sum
}
avg=sum/count
console.log(avg)
