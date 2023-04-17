//Problem 2 : Given a character in lower case print the upper case character
let char="america"
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let bag="";
for(let i=0;i<char.length;i++){
  // let nChar=char[i];
  for(let j=0;j<lower.length;j++){
    if(char[i]==lower[j]){
      bag=bag+upper[j]
    }
  }
}
console.log(bag);