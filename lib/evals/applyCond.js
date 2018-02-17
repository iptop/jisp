module.exports = {
    applyCond
}
const {eval} = require("../eval")
function isMatching(p) {


    if(p.type==="atom"){
        if(p.value === "else"){
            return true
        }
    }


    if(p.type==="boolean"){
        if(p.value===true){
            return true
        }
    }

    return false
}


function applyCond(rest,env) {
    var ret = null

    for(let [p,e] of rest){
        var k = eval(p,env)
        if(isMatching(k)){
            ret = eval(e,env)
            break
        }
        
    }

    return ret
}