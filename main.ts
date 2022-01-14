function Player_On_Off () {
    if (PlayerExists == false) {
        mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
        PlayerExists = true
        PlayerCanMove = false
    } else {
        mySprite.destroy()
        PlayerExists = false
        PlayerCanMove = false
    }
}
function MainMenu () {
    IsMenuOpen = true
    OpenMenu = 1
    blockMenu.showMenu([
    "Change BG",
    "Player",
    "Level",
    "No Walls",
    "Exit"
    ], MenuStyle.List, MenuLocation.RightHalf)
    blockMenu.setColors(1, 8)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (IsMenuOpen) {
        if (OpenMenu == 1) {
            CloseMenu()
        } else if (OpenMenu == 2) {
            MainMenu()
        } else if (OpenMenu == 3) {
            MainMenu()
        } else if (OpenMenu == 4) {
            PlayerToggle()
        } else if (OpenMenu == 5) {
            MainMenu()
        } else if (OpenMenu == 6) {
            MainMenu()
        }
    }
})
function Gravity () {
    if (PlayerExists) {
        if (IsGravityOn == false) {
            mySprite.ay = 500
            IsGravityOn = true
        } else {
            mySprite.ay = 0
            IsGravityOn = false
        }
    }
}
function BG_Toggle () {
    IsMenuOpen = true
    OpenMenu = 2
    blockMenu.showMenu([
    "Earth",
    "Moon",
    "Halloween",
    "Christmas",
    "Pink Forest",
    "Back"
    ], MenuStyle.List, MenuLocation.RightHalf)
    blockMenu.setColors(1, 8)
}
function LevelChange () {
    IsMenuOpen = true
    OpenMenu = 5
    blockMenu.showMenu(["Blank", "Level 1", "Back"], MenuStyle.List, MenuLocation.RightHalf)
    blockMenu.setColors(1, 8)
}
function CloseMenu () {
    blockMenu.closeMenu()
    IsMenuOpen = false
    OpenMenu = 0
    if (PlayerExists) {
        PlayerCanMove = true
    } else {
        PlayerCanMove = false
    }
}
function Level1 () {
    if (!(false)) {
        tiles.setTilemap(tilemap`L1`)
    } else {
        tiles.setTilemap(tilemap`L1 Noclip`)
    }
    Level = 1
}
function PlayerToggle () {
    IsMenuOpen = true
    OpenMenu = 3
    blockMenu.showMenu([
    "On/Off",
    "Speed",
    "Gravity",
    "Back"
    ], MenuStyle.List, MenuLocation.RightHalf)
    blockMenu.setColors(1, 8)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (IsMenuOpen == false) {
        MainMenu()
        PlayerCanMove = false
    } else {
        blockMenu.closeMenu()
    }
})
function MovementSpeed () {
    IsMenuOpen = true
    OpenMenu = 4
    blockMenu.showMenu([
    "Default",
    "Fast",
    "Slow",
    "Static",
    "Only Horizontal",
    "Only Vertical",
    "Inverted",
    "Back"
    ], MenuStyle.List, MenuLocation.RightHalf)
    blockMenu.setColors(1, 8)
}
function Level0 () {
    Level = 0
    tiles.setTilemap(tilemap`BlankLevel`)
}
blockMenu.onMenuOptionSelected(function (option, index) {
    PlayerCanMove = false
    if (OpenMenu == 1) {
        // Functions For The Main Menu
        if (option == "Change BG") {
            BG_Toggle()
        } else if (option == "Player") {
            PlayerToggle()
        } else if (option == "Level") {
            LevelChange()
        } else if (option == "No Walls") {
            NoWallsToggle()
        } else {
            CloseMenu()
        }
    } else if (OpenMenu == 2) {
        // Functions For The Background Changer Menu
        if (option == "Earth") {
            scene.setBackgroundImage(assets.image`rrrrrrrrreeeeeeeee`)
        } else if (option == "Moon") {
            scene.setBackgroundImage(assets.image`mon`)
        } else if (option == "Halloween") {
            scene.setBackgroundImage(assets.image`pumperkin`)
        } else if (option == "Christmas") {
            scene.setBackgroundImage(assets.image`appy olidays`)
        } else if (option == "Pink Forest") {
            scene.setBackgroundImage(assets.image`pinc`)
        } else {
            MainMenu()
        }
    } else if (OpenMenu == 3) {
        if (option == "On/Off") {
            Player_On_Off()
        } else if (option == "Speed") {
            MovementSpeed()
        } else if (option == "Gravity") {
            Gravity()
        } else {
            MainMenu()
        }
    } else if (OpenMenu == 4) {
        if (option == "Default") {
            vx = 100
            vy = 100
        } else if (option == "Fast") {
            vx = 200
            vy = 200
        } else if (option == "Slow") {
            vx = 50
            vy = 50
        } else if (option == "Static") {
            vx = 0
            vy = 0
        } else if (option == "Only Horizontal") {
            vx = 100
            vy = 0
        } else if (option == "Only Vertical") {
            vx = 0
            vy = 100
        } else if (option == "Inverted") {
            vx = -100
            vy = -100
        } else {
            PlayerToggle()
        }
    } else if (OpenMenu == 5) {
        if (option == "Blank") {
            Level0()
        } else if (option == "Level 1") {
            Level1()
        } else {
            MainMenu()
        }
    } else if (OpenMenu == 6) {
        if (option == "On") {
            NoWAlls = true
        } else if (option == "Off") {
            NoWAlls = false
        } else {
            MainMenu()
        }
    }
})
function NoWallsToggle () {
    IsMenuOpen = true
    OpenMenu = 6
    blockMenu.showMenu(["On", "Off", "Back"], MenuStyle.List, MenuLocation.RightHalf)
    blockMenu.setColors(1, 8)
}
let NoWAlls = false
let OpenMenu = 0
let IsMenuOpen = false
let mySprite: Sprite = null
let Level = 0
let IsGravityOn = false
let vy = 0
let vx = 0
let PlayerCanMove = false
let PlayerExists = false
game.splash("Welcome.")
game.splash("Welcome", "To The Land Of The Gods.")
game.splash("You Will Look", "Down On The Earth.")
game.splash("And Change Things", "As You Wish.")
game.splash("Press The MENU Button", "To Get Started.")
game.splash("And Good Luck", "To You.")
scene.setBackgroundImage(assets.image`rrrrrrrrreeeeeeeee`)
PlayerExists = false
PlayerCanMove = false
vx = 100
vy = 100
IsGravityOn = false
Level = 0
tiles.setTilemap(tilemap`BlankLevel`)
game.onUpdateInterval(1, function () {
    if (PlayerCanMove) {
        controller.moveSprite(mySprite, vx, vy)
    } else {
        controller.moveSprite(mySprite, 0, 0)
    }
})
game.onUpdateInterval(1, function () {
    if (Level == 1) {
        if (!(NoWAlls)) {
            tiles.setTilemap(tilemap`L1`)
        } else {
            tiles.setTilemap(tilemap`L1 Noclip`)
        }
    }
})
