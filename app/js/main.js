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
          $(this).addClass('active');           
          $('.choose__tab').find('.tab__item').removeClass('active-tab').hide();
          $('.choose__tab .tabs').find('.tab').removeClass('active');
          $(this).addClass('active'); 
          $('#'+id).addClass('active-tab').fadeIn(); 
                    
          return false;
        });
});