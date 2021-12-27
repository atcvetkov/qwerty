// треугольник квадрат
//  круг крест
let string_list = [
"triangle",
"sqware",
"ring",
"cross"
]
// поиск
let text = "ring"
basic.forever(function () {
    if (text == string_list[0]) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (text == string_list[1]) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (text == string_list[2]) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (text == string_list[3]) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
