// تابعی بنویسید که آرایه ای از آبجکت ها مانند زیر را دریافت کند و وضعیت هر آبجکت را در کنسول چاپ کند

function report(array){
    for(let index=0 ; index < array.length ; index++)
    if (array[index].readingStatus) {
        console.log(`Already read ${array[index].title} by ${array[index].author} .`);
    } else {
        console.log(`You still need to read ${array[index].title} by ${array[index].author} .`);
    }
}

const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: false
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    },

];

report(library);