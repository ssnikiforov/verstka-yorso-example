$(document).ready(function () {
    $(window).scroll(function () {
        scrolled_menu();
    });
    
    function scrolled_menu(){
        if ($(window).scrollTop() >= 300) {
            $(".fixed-menu").addClass("showed");
            $('.alerts').addClass('scrolled-alerts');
        }
        else{
            $(".fixed-menu").removeClass("showed");
            $('.alerts').removeClass('scrolled-alerts');
        }
        if($(window).scrollTop() >= $('.all-content .head-menu').height()){
            $('.alerts').addClass('add-fixed');
        }
        else{
             $('.alerts').removeClass('add-fixed');
        }
      
    }

    // init select 2
    if(document.querySelector('.custom-select')) {
        $('.custom-select').select2({
          width: '100%',
          theme: "bootstrap",
          allowClear: true,
          placeholder: 'Выберите страну',
          'containerCssClass': 'catalog-select',
          'dropdownCssClass': 'catalog-select__dropdown',
        });
    }

    $('.custom-select').on('select2:open', function() {
        $('.select2-search--dropdown .select2-search__field').attr('placeholder', 'Начните вводить название страны');
    });
    
    
    
    //инициализация слайдеров картинок товара
    $('.slider-top-init').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-bott-init'
    });
    $('.slider-bott-init').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-top-init',
        dots: false,
        arrows:true,
        infinite:false,
        focusOnSelect: true
    });
    
    
    
    $('.other-products .one-block,.shadow-wr,.shadow-wr-l').click(function() {
        location.href = $(this).find('a').attr('href');
    });
    
    
    
    
    
    
    
    //клик закрывающий выбор региона
    
    $('.close-region').click(function(){
        $('.regions').slideUp(150);
    });
    
    //клик откры/закр дропдауна регионов
    $('.picked-country').click(function(){
        if(!$(this).parents('.form-pick-region').hasClass('opened')){
            $(this).parents('.form-pick-region').addClass('opened')
        }
        else{
            $(this).parents('.form-pick-region').removeClass('opened')
        }
        
    });
    
    
    //закрыть куки
    $('.close-cookie').click(function(){
        $('.cookies-wrapp').css({
            'display':'none'
        });
    });
    
   
    
});
