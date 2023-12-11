
const fs = require("fs");
fs.readFile("C:/Users/rishi/OneDrive/Desktop/100xDevs/class1/week-2/01-async-js/easy/a.txt", "utf-8", function (err, data){
    console.log(data);
})

let a = 0;
for(let i=0;i<10000000000;i++){
    a++;
}
console.log(a);