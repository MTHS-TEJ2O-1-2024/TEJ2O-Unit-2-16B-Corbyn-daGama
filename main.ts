/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Nov 2024
 * This program knows when a micro:bit is too close to one another
*/

// setup
radio.setGroup(251)
basic.showIcon(IconNames.Happy)

// variable
let distanceToObject: number 

// find distance from sonar
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
)

    // if distance is <= 10
    if (distanceToObject <= 10) {
    radio.sendString("Too Close")
}
})

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
