
module.exports ={
    string
}

const {createString} = require("../type/lang")
function string(args) {
    return createString(
        args.map(i=>i.value).join()
    )
}