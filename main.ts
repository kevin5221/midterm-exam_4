let a = 0
let b = 0
let c = 0
let e = 0
let f = 0
input.onButtonPressed(Button.A, function () {
    a = 0
    b = 2
    c = 2
    for (let d = 0; d <= 2; d++) {
        for (let index = 0; index < 2; index++) {
            if (a == 1) {
                e = 0
                f = d
                a += -1
            } else if (a == 0) {
                f = 0
                e = d
                a += 1
            }
            led.plot(b + e, c + f)
            led.plot(b - e, c - f)
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
