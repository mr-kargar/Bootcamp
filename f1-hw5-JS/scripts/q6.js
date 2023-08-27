function wordCounter (wordString){
    console.log(`text in file : ${wordString}`);
    let wordArray = wordString.split(" ");
    console.log(`Number of words : ${wordArray.length}`);
}

function fileReader (filePath , wordCounter){
    const xHttp = new XMLHttpRequest();
    xHttp.open('GEt',filePath);
    xHttp.setRequestHeader('Access-Control-Allow-Origin','*');
    xHttp.send();
    xHttp.onload = () =>{
        str = xHttp.response;
        wordCounter(str);
    }
}

let filePath = 'http://127.0.0.1:5500/f1-hw5/files/test.txt';
fileReader( filePath , wordCounter);