
const fs = require("fs");
fs.readFile("C:/Users/rishi/OneDrive/Desktop/100xDevs/class1/week-2/01-async-js/medium/m.txt", "utf-8", function (err, data){
    while(data.includes("  ")){
        data = data.replace("  "," ");
    }
    fs.writeFile("C:/Users/rishi/OneDrive/Desktop/100xDevs/class1/week-2/01-async-js/medium/m.txt", data, "utf-8",function (err){})
})