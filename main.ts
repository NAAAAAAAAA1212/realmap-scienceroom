enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Jumpin
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖53`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`我的貼圖54`)
        game.showLongText("你修好床了", DialogLayout.Full)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖50`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖51`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖7`, function (sprite, location) {
    game.showLongText("You Fell Into The Lava! You Were Not An Killer", DialogLayout.Full)
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖11`, function (sprite, location) {
    for (let index = 0; index < 5; index++) {
        music.buzzer.playUntilDone()
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖12`)
    game.splash("緊急會議")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖48`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖4`)
        game.showLongText("因為你跳進了1個連接lava池的管道，所以你被lava燒死了", DialogLayout.Full)
        game.showLongText("You Fell Into The Lava! You Were Not An Killer", DialogLayout.Full)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖58`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("新世界的門還沒有啓動喲！", DialogLayout.Full)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖51`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖52`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖52`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖52`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖49`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖50`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖54`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`我的貼圖53`)
        game.showLongText("你把床睡塌了", DialogLayout.Full)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖46`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("天黑請閉眼", DialogLayout.Full)
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . 3 . 3 . 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . 4 . 4 . 3 . . . . . 
    . . . . 3 . . 4 . . 3 . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 . 3 . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`層級1`)
tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖4`)
let anim = animation.createAnimation(ActionKind.Walking, 1000)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . 3 . 3 . 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . 4 . 4 . 3 . . . . . 
    . . . . 3 . . 4 . . 3 . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 . 3 . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . 3 . 3 . 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 4 . . . 4 3 . . . . . 
    . . . . 3 . 4 4 4 . 3 . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 . 3 . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    `)
animation.attachAnimation(mySprite, anim)
animation.setAction(mySprite, ActionKind.Walking)
controller.combos.setExtendedComboMode(true)
controller.combos.setTimeout(100)
