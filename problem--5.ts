
// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


type guard = unknown

function guardcheck(params: guard) {
    if (typeof params === 'string') {
        console.log('Its String')
    } else {
        console.log('Its  Not String')

    }
}

guardcheck('MK')
guardcheck(20)