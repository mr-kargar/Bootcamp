function reverse (array){
    let item , reverseArray = [];
    let length = array.length;
    for(let index = 0 ; index< length ; index++){
        item = array.pop();
        reverseArray.push(item);
    }
    console.log(reverseArray);
    }

    reverse([1,2,3,4,5,6,7,8,9,10]);