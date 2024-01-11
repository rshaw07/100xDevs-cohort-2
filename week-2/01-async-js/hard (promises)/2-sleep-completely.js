/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const bt = new Date().getTime();
    return new Promise(function(resolve){
        let a =0;
        while(true){
            a++;
            const at = new Date().getTime();
            if((at-bt)/1000==milliseconds/1000){
                resolve();
                return at-bt;
            }
        }
    })
}

module.exports = sleep;
