module.exports={
    atomEval
}
const {createAtom} = require("../type/lang")
function atomEval(program,env) {

    const variable = env.getEnv(program) /*去当前环境中查找atom*/
    if(variable){
        return variable
    }else{
        //没找到的换返回一个atom
        return createAtom(program)
    }
}

