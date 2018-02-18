module.exports = {
    loadLang
}
const {eval} = require("../eval")
const fun = require("../lang/function")
function loadLang(env) {
    eval(fun,env)
}