module.exports={
    env
}
function env() {
    const outer = Symbol("outer")

    const envMap = new Map()

    envMap.set(outer,null)

    function setOuter() {

    }

    function setEnv(symbole,value) {
        envMap.set(symbole,value)
    }

    function hasEnv(symbole) {
        return envMap.has(symbole)
    }

    function getEnv(symbole) {
        return envMap.get(symbole)
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

