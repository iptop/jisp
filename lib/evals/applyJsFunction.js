module.exports ={
    applyJsFunction
}

const {parseRest}= require("./parserRest")

function applyJsFunction(fn,rest,env) {
    var args = parseRest(rest,env)
    return fn(args)
}