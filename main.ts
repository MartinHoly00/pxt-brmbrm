let leftI = 0
let rightI = 0
const speeds = [-100, -250,]




input.onButtonPressed(Button.A, function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speeds[++leftI % speeds.length])
})
	
    
input.onButtonPressed(Button.B, function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speeds[++rightI % speeds.length])
})

input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStop(PCAmotor.Motors.M1)
})

