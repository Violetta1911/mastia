$(function(){

    $('.care__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
    
    $('.recent-projects__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
      });    
      
      $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
      }); 
      $('.clients__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });

      $('.choose__tab  .tab').on('click', function(event) {
        let id = $(this).attr('data-id');     
        const $tabItem = $('.choose__tab').find('.tab__item');
        const $tab =  $('.choose__tab .tabs').find('.tab');

          if ($tabItem.hasClass('active-tab')) {
            $tabItem.removeClass('active-tab').hide();
            $tab.removeClass('active');
          }
          else {
            $(this).addClass('active'); 
            $('#'+id).addClass('active-tab').fadeIn();  
          }                                          
           return false;
        });

        $('.menu-btn').on('click', function (){
          $('.menu-list').slideToggle('')
          });

        let mixer = mixitup ('.project__box');  
});