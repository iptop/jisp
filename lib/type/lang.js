module.exports={
    isAtom,
    isNumber,
    isBoolean,
    isNull,
    createAtom,
    createString,
    createNumber,
    createBoolean,
    createNull,
    createFunction,
    createTimer
}


function isAtom(program) {
    return typeof program === "string"
}

function isNumber(program) {
    return typeof program === "number"
}

function isBoolean(program) {
    return typeof program === "boolean"
}

function isNull(program) {
    return  program == null
}

function createAtom(program) {
    return {
        type :"atom",
        value:program
    }
}

function createString(program) {
    return {
        type:"string",
        value:program
    }
}

function createNumber(program) {
    return {
        type:"number",
        value:program
    }
}

function createBoolean(program) {
    return {
        type:"boolean",
        value:program
    }
}

function createNull(program) {
    return{
        type:"null",
        value:""
    }
}

function createFunction(args,body,env) {
    return {
        type:"function",
        args:args,
        body:body,
        env:env,
    }
}

function createTimer(program) {
    return{
        type:"timer",
        value:program
    }
}