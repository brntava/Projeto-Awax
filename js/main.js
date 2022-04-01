function menuToggle(){
    let menu = document.querySelector('.menu-open');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'block';
    }
}