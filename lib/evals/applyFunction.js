
module.exports = {
    applyFunction
}
const {createEnv} = require("../env")
const {eval} = require("../eval")

function applyFunction(op,rest,env) {
    const funEvalEnv = createEnv()
    let {args,body,env:funScopeEnv} = op
    funEvalEnv.setOuter(funScopeEnv)
    for(var k in args){  /*参数绑定*/
        var p = rest[k]
        if(p){
            var ep =eval(p,env)
            funEvalEnv.setEnv(args[k],ep)
        }else{
            break
        }
    }

    return eval(body,funEvalEnv)

}