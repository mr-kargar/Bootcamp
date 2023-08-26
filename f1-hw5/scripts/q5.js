function timer (second){
    let idInterval = setInterval(() =>{
        if (second === 0) {
            clearInterval(idInterval);
        }
        console.log(second);
        second--;
    },1000);
}

timer(6);