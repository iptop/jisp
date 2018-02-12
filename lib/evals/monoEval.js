module.exports={
    monoEval
}
const {isAtom} = require("../type/lang")
const {atomEval} = require("../evals/atomEval")
function monoEval(program,env) {
    if(isAtom(program)){
        return atomEval(program,env)
    }else{
        return literalEval(program,env)
    }
}

