// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration

let name="Ram";
let school="masai school";
let grade="A";
let section="B";
let rollno=255;
let marks={
  math:45,
  physics:50,
  chemistry:60
};
console.log("======================================================")
console.log("Name"," ","School","     ","Grade"," ","Section"," ","Sbjects","  ","Marks");
console.log("------------------------------------------------------");
console.log(name,"  ",school," ",grade,"      ",section,"    ","Math","      ",marks.math);
console.log("                                     ","Physics","   ",marks.physics);
console.log("                                     ","Chemistry"," ",marks.chemistry);
console.log("======================================================")