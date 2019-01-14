$(function () {
    
    var couponid = getSearch("couponid") || 0;
    // 渲染优惠券列表

       $.ajax({
           type: 'get',
           url: 'http://127.0.0.1:9090/api/getcouponproduct',
           dataType: 'json',
           data: {
            couponid: couponid
           },
           success: function (data) {
               console.log(data)
               var html = template('couponproductTpl', data);
               $('.mmm_product ul').html(html);

               $('.goodPic').on('click',function(){
                   $('.mmm_wrapper').fadeIn()
               }) 
   
   
           }
       })




       var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
       
      })



      $('.del').on('click',function(){

        $('.mmm_wrapper').fadeOut();
        console.log(1);

      })








})