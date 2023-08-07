// تابعی بنویسید که یک آرایه ی چند بعدی را در ورودی دریافت و آن را تبدیل به یک آرایه ی تک عدی کند

function flatten(array, flatArray) {
    if (!flatArray) {
        flatArray = [];
    }
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            flatten(array[index], flatArray);
        } else {
            flatArray.push(array[index]);
        }
    }
    return flatArray;
}

let arr = ["amin", 1, true, [2, 3], { a: 1 }, ['amir', ['good', 123, false]]];
let flatArray;
console.log(flatten(arr, flatArray));