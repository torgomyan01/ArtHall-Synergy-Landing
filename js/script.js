const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}


const {
    saleBlackBg,
    container
} = {
    saleBlackBg: $('.sale-blackBg'),
    container: $('.container')
}



$(window).on('resize', function (){
    const defCont = ($(window).width() - container.width()) / 2;

    saleBlackBg.width(defCont)
}).resize()

