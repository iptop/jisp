module.exports={
    bindings
}

const {createFunction} = require("../type/js")
const {println} = require("../function/io")
const {string,add,multiply,eq,lt} = require ("../function/core")
function bindFunction(env,symbol,fn) {
    return env.setEnv(symbol,createFunction(fn))
}

function bindings(env) {
    bindFunction(env,"println",println)
    bindFunction(env,"string",string)
    bindFunction(env,"+",add)
    bindFunction(env,"*",multiply)
    bindFunction(env,"=",eq)
    bindFunction(env,"<",lt)

}
