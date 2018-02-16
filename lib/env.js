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
        var map = setMap(symbole)
        map.set(symbole,value)
    }

    function setMap(symbole) {
        var node = getOuter()

        while (node){

            var v = node.getValue()
            if(v.has(symbole)){
                break
            }
            node=node.getOuter()
        }
        if(node){
            return node.getValue()
        }else{
            return envMap
        }

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

    function getValue() {
        return envMap
    }

    function getOuter() {
        if(envMap.has(outer)){
            return envMap.get(outer)
        }else{
            return null
        }
    }


    return {
        setOuter,
        setEnv,
        hasEnv,
        getEnv,
        removeEnv,
        getValue,
        getOuter
    }

}

