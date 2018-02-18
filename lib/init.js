module.exports={
    initGlobalEnv
}

const {bindings} = require ("./init/bindings")
const {loadLang} = require ("./init/loadLang")
function initGlobalEnv(env) {

    bindings(env)
    loadLang(env)
}