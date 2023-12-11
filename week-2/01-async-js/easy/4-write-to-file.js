
const fs = require("fs");
fs.writeFile("C:/Users/rishi/OneDrive/Desktop/100xDevs/class1/week-2/01-async-js/easy/a.txt","this is the new sentence" , "utf-8", function (err){
    
})
fs.readFile("C:/Users/rishi/OneDrive/Desktop/100xDevs/class1/week-2/01-async-js/easy/a.txt", "utf-8", function (err, data){
    console.log(data);
})