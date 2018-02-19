const program= require ("./lisp/timers.json")
const {createEnv} = require("../lib/env")
const eval = require("../lib/eval").eval
const globalEnv = createEnv()
const {initGlobalEnv}= require("../lib/init")
initGlobalEnv(globalEnv)
const result = eval(program,globalEnv)
console.log(result)
