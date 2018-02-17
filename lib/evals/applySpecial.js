module.exports = {
    applySpecial
}
const {createFunction} = require("../type/lang")
const {applyDo} = require("./applyDo")
const {applyDef} = require("./applyDef")
const {applyCond} = require("./applyCond")
function applySpecial(type,rest,env) {
    if(type=="fn"){ /*创建函数操作*/
        return createFunction(rest[0],rest[1],env)
    }

    if(type=="do"){ /*语句块表达式*/
        return applyDo(rest,env)
    }

    if(type=="def"){ /*环境绑定操作*/
        return applyDef(rest,env)
    }

    if(type=="cond"){ /*条件操作*/
        return applyCond(rest,env)
    }

    return null
}
