input.onGesture(Gesture.LogoUp, function () {
    sprite_1.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite_1.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite_1.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite_1.change(LedSpriteProperty.Y, -1)
})
let sprite_1: game.LedSprite = null
basic.showIcon(IconNames.Heart)
sprite_1 = game.createSprite(2, 2)
let enemy_sprite = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (sprite_1.isTouching(enemy_sprite)) {
        music.playMelody("- - D F D D - - ", 120)
        basic.showIcon(IconNames.Heart)
        control.reset()
    }
})
