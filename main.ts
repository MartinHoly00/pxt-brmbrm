
radio.setGroup(213)
radio.setFrequencyBand(7)


const speed = 250

const directionState = {
    STOP: 0,
    FORWARD: -1,
    BACKWARD: 1,
    LEFT: -2,
    RIGHT: 2
}

let Xdir = directionState.STOP
let Zdir = directionState.STOP

basic.forever(function () {
    if (Xdir != directionState.STOP) {
        if (Xdir == directionState.LEFT) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -speed)
            PCAmotor.MotorRun(PCAmotor.Motors.M4,  speed)
        } else if (Xdir == directionState.RIGHT) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1,  speed)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -speed)
        }
    } else if (Zdir != directionState.STOP) {
        if (Zdir == directionState.FORWARD) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -speed)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -speed)
        } else if (Zdir == directionState.BACKWARD) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, speed)
        }
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
})

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "Xdir") {
        Xdir = value
    }
    if (name == "Zdir") {
        Zdir = value
    }
})



