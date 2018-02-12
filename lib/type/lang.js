module.exports={
    isAtom,
    isNumber,
    isBoolean,
    isNull,
    createAtom,
    createString
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