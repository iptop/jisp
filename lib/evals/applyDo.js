module.exports = {
    applyDo
}
const {eval} = require("../eval")
function applyDo(rest,env) {
    var ret = null
    rest.forEach(function (i) {
        ret = eval(i,env)
    })
    return ret
}