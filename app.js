//==========Simple Array==========//
//Array like a variable
//there are two way to create Array
let myArray = ["A", "B", "C", "D", "E"];
let myArrayPro = new Array("1", "2", "3", "4", "5");

//simple array print
console.log(myArrayPro[2]);

//full array print
for(let data of myArray){
    console.log(data);
}

//==========Multidimensional Array===========//
let bangladesh = ["Dhaka", "Barishal", "Khulna"];
let india = ["Kolkata", "Dilli", "Mumbai"];
let chaina = ["Uhan", "Shanghai", "HongKong"];
let asia = [bangladesh, india, chaina];

console.log(asia[0][1]);

//==========De structuring array==========//
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let [s, , , ,n]=numbers;
console.log(n);