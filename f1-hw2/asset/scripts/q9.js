function convertToArray ( object){
    let convertArray = [];
    for( key in object)
    convertArray.push([key , object[key]]);
console.log(convertArray);
}

const obj = {
    a: 1,
    b: 2
};

convertToArray(obj);