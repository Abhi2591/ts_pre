"use strict";
// const fullName: string = "25";
// const age: number = 25;
// const colors: string[] = ["Red", "Green", "Blue", "25"];
let info = {
    fullName: 'Bunny Chaudhary',
    age: 12,
    address: "Lucknow",
    // isWhite : "white",
    isWhite: true
};
let addNumber = (n1, n2, n3) => {
    // const finalValue = n1+n3;
    // return finalValue.toString();
    return n2;
};
addNumber(21, info, 23);
for (let p = 0; p < 10; p++) {
}
;
const students = [{
        fullName: "Bunny",
        age: 12,
        address: "LKO",
        isWhite: true
    },
    {
        fullName: "Saquib",
        age: 68,
        address: "DELHI",
        isWhite: true
    },
    {
        fullName: "Murkhandi",
        age: 99,
        address: "PUNE",
        isWhite: false
    }
];
const result = students.map((student, i) => {
    return {
        serialNumber: i,
        userName: student.fullName
    };
});
console.log(result);
// let userName: string = "Bunny";
// console.log(userName)
// let age: number = 25;
// let colours : string[] = ["Yellow", "Red", "Green"];
// let info : infoType = {
//     name: "bunny",
//     age: 25,
//     color: "White",
//     isWorking: true
// };
// colours.map((e: string)=>{
//     return e;
// })
// const addNumber = (a : number,b : number) : boolean =>{
//    return a>b;
// }
// addNumber(2,4);
