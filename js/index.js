$(document).ready(function(){
    //nav mobile
    $('#nav-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    })
    //scroll nav
    let nav = $('.header-nav');
    let navHeight = nav.outerHeight();
    let sections = $('.section');

    $(window).on('scroll', function(){
        let sTop = $(this).scrollTop();
        if (sTop > navHeight) {
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
        //scroll
        if(sTop == 0){
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active');
        }
        else{
            sections.each(function(){
                let top = $(this).offset().top - navHeight;
                if (sTop >= top){
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
            });
        }
    });

    //navegação
    nav.find('a').on('click', function(e){
        e.preventDefault();
        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');
        let target = $(this).attr('href');
        
        if (target == '#home'){
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        }
        else{
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 700);
        }

    });

});