module.exports={
    tupleEval
}
const {eval} = require("../eval.js")
const {applyJsFunction} = require ("./applyJsFunction")
function tupleEval(program,env) {
    let [first,...rest]=program /*获得列表第一个元素和最后一个*/

    let op = eval(first,env) /*把第一个元素转换为操作*/

    if(op.type === "js_function"){
        /*执行js函数*/
        return applyJsFunction(op.value,rest,env)
    }

    if(op.type === "special"){
        
    }

    if(op.type === "atom"){
        console.log("错误：符号‘",first,"’未定义")

        return null
    }

    return null
}

