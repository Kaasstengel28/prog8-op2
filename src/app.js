const k = 3
const machine = new kNear(k)

function learnUp() {
    machine.learn(webcamdata, 'up')
    log.innerText = `Learning up`
}

function learnDown() {
    machine.learn(webcamdata, 'down')
    log.innerText = `Learning down`

}
function learnOk() {
    machine.learn(webcamdata, 'ok')
    log.innerText = `Learning Oklahoma`
}

function predict() {
    let prediction = machine.classify(webcamdata)
    console.log(`I think it's a ${prediction}`)
    log.innerText = `I think it's a ${prediction}`
}
