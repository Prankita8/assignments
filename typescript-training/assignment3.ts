
// Student names and marks
const studentNames: string[] =["Suresh","Mahesh","Naresh"];
const studentMarks : number[]= [75,80,82];


const updatedMarks: number[] = [];
//Add 10 marks to each students using assignment operators 
let total: number = 0;

for (let i: number = 0; i < studentMarks.length; i++) {
  updatedMarks[i] = studentMarks[i] + 10;
  total += updatedMarks[i];
  console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

const avg:number=total / updatedMarks.length;
console.log(`Average Marks: ${avg}`);