//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let starting=1;
let count=0
let ending=100;
let result;
while(starting<=ending){
  let sum=ending*(ending+1)/2
  result=sum/count
    // console.log(sum/count)
    starting++;
    count++;
}
console.log(result)