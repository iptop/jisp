module.exports={
    bindings
}

const {createFunction} = require("../type/js")
const {println} = require("../function/io")
const {string,add,sub,multiply,eq,lt,
    and,or,not,
    timer,deleteTimer,
    list

} = require ("../function/core")
function bindFunction(env,symbol,fn) {
    return env.setEnv(symbol,createFunction(fn))
}

function bindings(env) {
    bindFunction(env,"println",println)
    bindFunction(env,"string",string)
    bindFunction(env,"+",add)
    bindFunction(env,"-",sub)
    bindFunction(env,"*",multiply)
    bindFunction(env,"=",eq)
    bindFunction(env,"<",lt)
    bindFunction(env,"and",and)
    bindFunction(env,"or",or)
    bindFunction(env,"not",not)
    bindFunction(env,"timer",timer)
    bindFunction(env,"deleteTimer",deleteTimer)
    bindFunction(env,"list",list)
}
