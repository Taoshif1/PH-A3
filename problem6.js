/** Problem 06 :  Current Salary ( Challenge Problem)   */
var experience = 30;
var startingSalary = 45000;
//write your code here

for(i = 0; i < experience; i++){
    startingSalary *= 1.05;
} 

console.log(startingSalary.toFixed(2))

