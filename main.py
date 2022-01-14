def on_b_pressed():
    if True:
        blockMenu.close_menu()
    else:
        pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_menu_option_selected(option, index):
    if index == 0:
        pass
blockMenu.on_menu_option_selected(on_menu_option_selected)

OpenMenuIndex = 0
IsMenuOpen = True
blockMenu.show_menu(["New Menu", "I Am Crazy"],
    MenuStyle.LIST,
    MenuLocation.FULL_SCREEN)