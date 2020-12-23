function main(){
    let burger = document.querySelectorAll('.header__burger');
    let menu = document.querySelectorAll('.header__menu');
    var body = document.getElementsByTagName("BODY")[0];
    burger[0].addEventListener('click', showMenu)
    function showMenu(){
        console.log('burger clicked')
        burger[0].classList.toggle('active');
        menu[0].classList.toggle('active');
        body.classList.toggle('lock');
    }
}

export {
    main
};
