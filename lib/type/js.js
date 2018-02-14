module.exports ={
    isMono,
    createFunction,
    isSpecial,
    createSpecial
}
function isMono(program) {
    return typeof program != "object"
}

/*判断一个atom是否为特殊操作*/
function isSpecial(program) {
    return [
        "fn", /*函数定义操作*/
        "do", /*块表达式*/
        "def" /*绑定操作*/
    ].includes(program)
}

function createFunction(fn) {
    return {
        type:"js_function",
        value:fn
    }
}

function createSpecial(program) {
    return {
        type:"special",
        value:program
    }
}