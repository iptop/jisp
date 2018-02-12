module.exports={
    eval
}
const {isMono} = require("./type/js")
const {isAtom} = require("./type/lang")
const {monoEval} = require("./evals/monoEval")
const {tupleEval} = require("./evals/tupleEval")
function eval(program,env) {
    if(isMono(program)){

        return monoEval(program,env)
    }else{
        return tupleEval(program,env)
    }
}

