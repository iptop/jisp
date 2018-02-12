module.exports={
    initGlobalEnv
}

const {bindings} = require ("./init/bindings")

function initGlobalEnv(env) {
    return bindings(env)
}