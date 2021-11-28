// BURGER MENU LIST
const burgerName = document.querySelectorAll(".burger-item__name");
burgerName.forEach(function (item) {
    item.addEventListener('click', showContent);
})
function showContent() {
    this.nextElementSibling.classList.toggle('hidden');
    this.classList.toggle('active');
}

// ICON BURGER MENU
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.burger-menu');
const menuClose = document.querySelector('.burger-menu__close');
const menuOverlay = document.querySelector('.menu-overlay');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        menuBody.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });
}
if(menuClose){
    menuClose.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove('lock');
        menuBody.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
}

// HEADER STICKY ON SCROLL
window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
    if (window.scrollY > 0) {
        $('.header-input__wrapper').addClass('scrolled');
    } else {
        $('.header-input__wrapper').removeClass('scrolled');
    }
});


// MODAL WINDOW
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('lock');
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        modal.querySelector('.modal-window').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
})
modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('lock');
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        document.body.classList.remove('lock');
        this.classList.add('hidden');
    });
});
// ОТКРЫТЬ СТРОКУ ПОИСКА 

$('.menu__search').click(function(){
    $('.header-input__wrapper').addClass('active');
    $('.close__menu').css('display','block');
    $('.menu__search').css('display','none');
    $('.close__menu').css('display','block');
    $('.menu__item').addClass('hidden')
})
$('.close__menu').click(function(){
    $('.header-input__wrapper').removeClass('active');
    $('.close__menu').css('display','none');
    $('.menu__search').css('display','block');
    $('.close__menu').css('display','none');
    $('.menu__item').removeClass('hidden');
})