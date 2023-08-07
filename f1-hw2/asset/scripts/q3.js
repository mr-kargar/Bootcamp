//برنامه ای بنویسید که آر ایه ای از متغیر های مختلف را به عنوان ورودی دریافت کند و تعداد و نوع متغیر های موجود را نمایش دهد


function classifier(array) {
    let num = 0, str = 0, obj = 0, arr = 0, bool = 0, undef = 0, nul = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            arr++;
        } else if (typeof array[i] === 'object' && array[i] === null) {
            nul++
        } else {
            switch (typeof array[i]) {
                case 'number':
                    num++;
                    break;
                case 'string':
                    str++;
                    break;
                case 'object':
                    obj++;
                    break;
                case 'undefined':
                    undef++;
                    break;
                case 'boolean':
                    bool++;
                    break;
            }
        }
    }
    console.log(`number : ${num} , string : ${str} , object : ${obj} , array : ${arr} , boolean : ${bool} , undefined : ${undef} , null : ${nul}`);
}

classifier([2, 5, 'amin', { a: 1 }, [1, 2], true, undefined, null, [3, 4], { b: 3 }]);