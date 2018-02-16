module.exports = {
    applyDef
}
const {eval} = require("../eval")
const {createAtom} = require("../type/lang")
function applyDef(rest,env) {

    env.setEnv(
        rest[0],
        eval(rest[1],env)
    )

    return createAtom(rest[0],env)

}