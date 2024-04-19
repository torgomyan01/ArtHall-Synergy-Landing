const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

const {
    saleBlackBg,
    container,
    mobileMenu,
    _menu,
    mobileMenuFon,
    navbar
} = {
    saleBlackBg: $('.sale-blackBg'),
    container: $('.container'),
    mobileMenu: $('.mobile-menu-board'),
    _menu: $('.mobile-menu'),
    mobileMenuFon: $('.mobile-menu-fon'),
    navbar: $('.navbar')
}


$(window).on('resize', function (){
    const defCont = ($(window).width() - container.width()) / 2;
    saleBlackBg.width(defCont)
}).resize()

$('.slider-item .slider-item-slide-texts').each((index, elem) => {
    const parent = $(elem).parent();
    $(elem).slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: parent.find('.slider-item-prev'),
        nextArrow: parent.find('.slider-item-next')
    }).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        const i = (currentSlide ? currentSlide : 0) + 1;
        parent.parent().find('.slider-item-title-pagination').text(i + '/' + (slick.$dots[0].children.length));
    })
})


// OPEN CLOSE MOBILE MENU

mobileMenu.on('click', function (){
    if(_menu.hasClass(active)){
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
})



function openMobileMenu(){
    $('body').addClass('overflow-hidden');
    mobileMenu.addClass(active);
    _menu.addClass(active);
    mobileMenuFon.addClass(active);
    navbar.addClass(active);
}

function closeMobileMenu(){
    $('body').removeClass('overflow-hidden');
    mobileMenu.removeClass(active);
    _menu.removeClass(active);
    mobileMenuFon.removeClass(active);
    navbar.removeClass(active);
}




