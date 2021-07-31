function scrollHandler(){

    if($(window).scrollTop() >= $('.about').position().top){
        $('.menu-right button').css('color', '#4a4a4a');
        $('.skill').each(function(){
            var skill = $(this);
            var percent = skill.find('.percentage').text();
            skill.find('.inner-bar').animate({width: percent}, 1200);
        });
    }
    else{
        $('.menu-right button').css('color', 'white');
    }

  $('section').each(function(){
    if($(window).scrollTop() >= $(this).position().top){
        $(this).find('.vertical-center').animate({'opacity': '1', top: '0'}, 800);
    }
  });
 

 
}


$(window).on('scroll', scrollHandler);

$('#about-btn').on('click', function(){
    $('html, body').animate ({scrollTop: $('.about').position().top},1000); 


});

$('#contact-btn').on('click', function(){
    $('html, body').animate ({scrollTop: $('.contact').position().top},1000); 

});


scrollHandler();