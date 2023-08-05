function typeChecker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            console.log(`${arr[i]} : array`)
        } else {
            console.log(`${arr[i]} : ${typeof arr[i]}`)
        }
    }
}

typeChecker([2, 'amin' , true , {a:1} , [1,2] , null , undefined]);