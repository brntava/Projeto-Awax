function menuToggle(){
    let menu = document.querySelector('nav');

    if(window.screen.width <= "800"){
        if(menu.style.width == '70vw'){
            menu.style.width = '0';
        } else{
            menu.style.width = '70vw';
        }
    }
}

if(window.screen.width > "800"){
    document.querySelector('nav').style.removeProperty('width');
}
