module.exports = {
    applyDef
}
const {eval} = require("../eval")
const {createAtom} = require("../type/lang")
function applyDef(rest,env) {
    /*绑定到执行环境*/
    env.setEnv(
        rest[0],
        eval(rest[1],env)
    )

    return createAtom(rest[0],env)

}