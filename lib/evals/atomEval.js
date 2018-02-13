module.exports={
    atomEval
}
const {createAtom} = require("../type/lang")
const {createSpecial} = require("../type/js")
const {isSpecial} = require("../type/js")

function atomEval(program,env) {
    const variable = env.getEnv(program) /*去当前环境中查找atom*/
    if(variable){ /*判断该atom是否是一个环境变量*/
        return variable
    }else{
        if(isSpecial(program)){ //判断是否为特殊操作
            return createSpecial(program)
        }else{
            return createAtom(program) /*没找到的换返回一个atom*/
        }
    }
}

