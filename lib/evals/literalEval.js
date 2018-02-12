
module.exports ={
    literalEval
}

const {
    createNumber,createBoolean,createNull,
    isNumber, isBoolean, isNull,} = require ("../type/lang")

function literalEval(program,env) {
    if(isNumber(program)){
        return createNumber(program)
    }
    if(isBoolean(program)){
        return createBoolean(program)
    }
    if(isNull()){
        return createNull(program)
    }

    console.log("错误: ",program,"未知类型")
    return null
}
