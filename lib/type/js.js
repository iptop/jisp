module.exports ={
    isMono,
    createFunction
}
function isMono(program) {
    return typeof program != "object"
}

function createFunction(fn) {
    return {
        type:"js_function",
        value:fn
    }
}