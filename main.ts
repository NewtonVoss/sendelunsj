input.onButtonPressed(Button.A, function () {
    radio.sendNumber(12)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(89)
basic.forever(function () {
	
})
