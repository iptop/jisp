
module.exports ={
    string,
    add,
    multiply
}

const {createString,createNumber} = require("../type/lang")
function string(args) {
    return createString(
        args.map(i=>i.value).join()
    )
}

function add(args) {
    return  createNumber(
        args.map(i=>i.value).reduce((a,b)=>a+b)
    )
}

function multiply(args) {
    return  createNumber(
        args.map(i=>i.value).reduce((a,b)=>a*b)
    )
}