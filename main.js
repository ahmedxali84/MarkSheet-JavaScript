const name = prompt("What Is Your Name?");
var Obtained_Marks = prompt("Obtained Marks");
var Total_Marks = prompt("Total Marks");
var Percentage = (Obtained_Marks / Total_Marks) * 100;
if(Percentage>50){
    remarks = ("Average")
}
else if (Percentage<50){
    remarks = ("Below Avg")
}
if(Percentage>80){
    remarks = ("Very Good")
}
else if(Percentage<80){
    remarks = ("Good")
}
if(Percentage>80){
    remarks = ("Excelent")
}
else if(Percentage>=90){
    remarks = ("KIYA BAAT HAI LARKY TERI")
}

var result = "Name: " + name + "\n" +
             "Obtained Marks: " + Obtained_Marks + "\n" + 
             "Total Marks: " + Total_Marks + "\n" +
             "Percentage: " + Percentage + "%" + "\n" +
             "remarks: " + remarks;

alert(result)
console.log(result)
document.write(result)