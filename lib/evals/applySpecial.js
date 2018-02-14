module.exports = {
    applySpecial
}
const {createFunction} = require("../type/lang")
const {applyDo} = require("./applyDo")
const {applyDef} = require("./applyDef")
function applySpecial(type,rest,env) {
    if(type=="fn"){ /*创建函数操作*/
        return createFunction(rest[0],rest[1],env)
    }

    if(type=="do"){
        return applyDo(rest,env)
    }

    if(type=="def"){
        return applyDef(rest,env)
    }
    return null
}