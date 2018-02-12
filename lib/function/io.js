module.exports={
    println
}

function println(args) {
    console.log.apply(this,args.map(i=>i.value.toString()))
}