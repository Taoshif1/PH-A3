/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var dividedAssest = area/2;
//console.log(typeof(dividedAssest))
console.log(dividedAssest)


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log("Laptop")
}else if(money >= 10000){
    console.log("Cycle")
}else
    console.log("Chocolate")



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(i = 1; i <= lastDay; i++){
    if(i%3==0){
        console.log(i+ " - medicine")
    }else
        console.log(i+ " = rest")
}



/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if((fileName.startsWith("#")) || (fileName.endsWith(".pdf")) || (fileName.endsWith(".docx")) ) {
    console.log("Store")
}else
    console.log("Delete")



/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var output = student.name + student.roll + "." + student.department + "@ph.ac.bd"
console.log(output)



/** Problem 06 :  Current Salary ( Challenge Problem)   */
var experience = 30;
var startingSalary = 45000;
//write your code here

for(i = 0; i < experience; i++){
    startingSalary *= 1.05;
} 

console.log(startingSalary.toFixed(2))



