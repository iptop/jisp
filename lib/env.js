module.exports={
    createEnv
}

function createEnv() {
    const outer = Symbol("outer")

    const envMap = new Map()

    envMap.set(outer,null)

    function setOuter(outerEnv) {
        envMap.set(outer,outerEnv)
    }

    function setEnv(symbole,value) {
        envMap.set(symbole,value)
    }

    function hasEnv(symbole) {
        var ret = envMap.has(symbole)
        if(!ret){
            var o = envMap.get(outer)
            if(o){
                ret= o.hasEnv(symbole)
            }
        }
        return ret
    }

    function getEnv(symbole) {
        var ret = envMap.get(symbole)
        if(!ret){
            var o = envMap.get(outer)
            if(o){
                ret= o.getEnv(symbole)
            }
        }
        return ret
    }

    function removeEnv() {

    }


    return {
        setOuter,
        setEnv,
        hasEnv,
        getEnv,
        removeEnv
    }

}

