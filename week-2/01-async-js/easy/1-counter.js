let counter = 0;

function increment(){
    console.log(counter);
    return counter++;
}

setInterval(increment, 1000);