
setInterval(function (){
    const date = new Date();
    let hour = date.getHours();
    let str="0";
    if(hour>12){
        hour = hour-12;
        if(hour<10){
            str += hour;
        }
        else{
            str = hour;
        }
        console.log(str+":"+date.getMinutes()+"::"+date.getSeconds()+" PM");
    }
    else{
        if(hour<10){
            str += hour;
        }
        else{
            str = hour;
        }
        console.log(str+":"+date.getMinutes()+"::"+date.getSeconds()+" AM");
    }
}, 1000);
