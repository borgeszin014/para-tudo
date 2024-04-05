input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        tampo += -1
        basic.showNumber(tampo)
        basic.pause(100)
    }
})
let tampo = 0
basic.showNumber(10)
tampo = 10
