const program= require ("./lisp/def.json")
const env = require("../lib/env").env
const eval = require("../lib/eval").eval
const globalEnv = env()
const {initGlobalEnv}= require("../lib/init")
initGlobalEnv(globalEnv)
const result = eval(program,globalEnv)
console.log(result)
