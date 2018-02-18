
module.exports ={
    string,
    add,
    multiply,
    eq,
    lt
}

const {createString,createNumber,createBoolean} = require("../type/lang")
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


function lt(args) {
    return createBoolean(
        args[0].value < args[1].value
    )
}


function eq(args) {
    var t = new Set()
    var v = new Set()
    args.forEach(function (i) {
        t.add(i.type)
        v.add(i.value)
    })


    if(t.size==1 && v.size==1){
        return createBoolean(true)
    }else{
        return createBoolean(false)
    }
}