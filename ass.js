const myos = require("os")

const myde = myos.cpus()
const result = myde[0].speed

let y = []
y.push(result)
console.log(y.toString().split(""))

let freee = []
const myme = myos.freemem()
// console.log(myme)
freee.push(myme.toString().split("")[0])
console.log(freee.toString(  ))

const load = myos.loadavg()
console.log(load)

const get = myos.getPriority()
console.log(get)

const plat = myos.platform()
console.log(plat)

const release = myos.release()
console.log(release)

const tm = myos.tmpdir()
console.log(tm)

const type = myos.type()
console.log(type)


let z = []
const time = myos.uptime()
// console.log(time)
z.push(time)
console.log(z.toString().split("")[1])