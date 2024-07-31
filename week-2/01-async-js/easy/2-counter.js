let num = 0;

function counter(){
    console.log(num);
    num++;
    setTimeout(counter, 1000);
}

counter();

