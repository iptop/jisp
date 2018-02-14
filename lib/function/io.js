module.exports={
    println
}

function stringify(args) {
    return args.map(i=>{
        if(i.type=="function"){
            return {value:JSON.stringify(i)}
        }else if(i.type=="atom"){
            return {value:`atom:${i.value}`}
        }else{
            return i
        }
    })
}

function println(args) {
    args = stringify(args)
    console.log.apply(this,args.map(i=>i.value.toString()))
    return null
}