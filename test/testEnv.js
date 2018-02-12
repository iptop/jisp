const env = require("../lib/env").env
const globalEnv = env()
const {initGlobalEnv}= require("../lib/init")
initGlobalEnv(globalEnv)
var println = globalEnv.getEnv("println")
console.log(println)