
module.exports ={
    parseRest
}
const {eval} = require("../eval.js")
function parseRest(rest,env) {
    return rest.map(i=>
        eval(i,env)
    )
}