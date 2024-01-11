
// using setTimeout
for(let i=1;i<10000;i++){
    setTimeout(function (){
        console.log(i);
    },i*1000)
}


//without setTimeout
let count = 0;
function sum(){
    let a=0;
    for(let i=0;i<820000000;i++){
        a++;
    }
    count++;
    console.log(count);
}

for(let i=0;i<10000;i++){
    sum();
}