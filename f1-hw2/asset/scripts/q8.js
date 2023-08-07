//برنامه ای بنویسید که مقدار های یک آبجکت را لیست نماید

function getObjectValue (object){
    let valueArray = [];
    for( key in object)
    valueArray.push(object[key]);
console.log(valueArray);
}

const obj = {
    a: 1,
    b: 2
};

getObjectValue(obj);