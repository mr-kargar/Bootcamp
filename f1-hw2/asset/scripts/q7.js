//برنامه ای بنویسید که کلید های یک آبجکت را لیست نماید

function getObjectKeys(object) {
    let keyArray = [];
    for (key in object)
        keyArray.push(key);
    console.log(keyArray);
}


const obj = {
    a: 1,
    b: 2
};

getObjectKeys(obj);