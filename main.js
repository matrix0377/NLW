// Continur o video em 1:43:21 -->> Stage 2

// String (textos)
// Number (numeros)
// Boolean (True | False)

function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
    if openMenu() {
        /* esconder o botão de menu --resolver isso*/
        document.body.button.open-menu.hidden
        
    }
    
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

