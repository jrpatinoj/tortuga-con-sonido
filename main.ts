basic.forever(function () {
    if (input.temperature() < 26) {
        basic.showString("T. Baja")
    } else if (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showString("T. Normal")
    } else {
        basic.showString("T. Alta")
    }
})
