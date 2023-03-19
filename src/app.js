const k = 3
const machine = new kNear(k)

function learnUp() {
    machine.learn(webcamdata, 'Up')
    log.innerText = `Learning up`
}

function learnDown() {
    machine.learn(webcamdata, 'Down')
    log.innerText = `Learning down`

}
function learnOklahoma() {
    machine.learn(webcamdata, 'Oklahoma')
    log.innerText = `Learning Oklahoma`
}

function predict() {
    let prediction = machine.classify(webcamdata)
    console.log(`I think it's ${prediction}`)
    log.innerText = `I think it's ${prediction}`
}
