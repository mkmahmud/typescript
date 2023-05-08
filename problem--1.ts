// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.


function logString (param1:string, param2:null | number = 3) {
    if(typeof param2 === 'number'){
        for(let i =0; i < param2; i++){
            console.log(param1)
        }
    }
}

logString('mk',4)
