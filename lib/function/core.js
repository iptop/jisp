
module.exports ={
    string,
    add,
    multiply,
    eq,
    lt,
    and,
    or,
    not,
    sub,
    timer,
    deleteTimer,
    list
}

const {createString,createNumber,createBoolean,
    createTimer,createNull, createList} = require("../type/lang")
const {applyFunction}= require("../evals/applyFunction")
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


function sub(args) {
    if(args.length==1){
        return createNumber(
            -args[0].value
        )
    }else{
        let [first,...rest] = args
        return createNumber(
            rest.map(i=>i.value).reduce((a,b)=>a-b,first.value)
        )
    }
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

function not(args) {
    return createBoolean(
        !args[0].value
    )
}




function and(args) {
    var ret = true

    for(var item of args){

        if(!item.value){
            ret=false
            break
        }
    }

    return createBoolean(ret)
}

function or(args) {

    var ret = false

    for(var item of args){
        if(item.value){
            ret=true
            break
        }
    }

    return createBoolean(ret)
}




function timer(args,env) {
    const fn = args[0]
    const det = args[1].value
    return createTimer(
        setTimeout(function () {
            applyFunction(fn,[],env)
        },det)
    )
}

function deleteTimer(args) {
    clearTimeout(args[0].value)
    return createNull()
}

function list(args) {
    return createList(args)
}