$(function(){
 var shopid = 0;
 var areaid = 0;



 render(shopid,areaid);

// 渲染商店

   $('.shop').on('click',function(){
    //    if ($('.message').hasClass('hidden')){
    //        $('.message').removeClass('hidden');
    //    }else {
    // }
         $('.message').removeClass('hidden');

    
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getgsshop',
        dataType: 'json',
        success: function (data) {
                console.log(data)
                var html = template('Tpl', data);
                $('.mmm_nav ul').html(html);
                


                $('.message').on('click','li',function(){
                    shopid = $(this).data('id');
                    $('.message').addClass('hidden');
                    var textshop = $(this).text();

                    if(textshop.trim().length <= 4){
                      $('.shop').text(textshop);
                    }

                    render(shopid,areaid);
                })

                
            }
        })
        
   


})

// 渲染地区
$('.area').on('click',function(){
    // arealist = true;
    // if (!shoplist){
    //     $('.message').toggleClass('hidden');
       
    // }
    $('.message').removeClass('hidden');
    
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getgsshoparea',
        dataType: 'json',
       
        success: function (data) {
            console.log(data)
            var html = template('Tpl', data);
            $('.mmm_nav ul').html(html);
            

            
            $('.message').on('click','li',function(){
                areaid = $(this).data('id');
                $('.message').addClass('hidden');
                var txt= $(this).text();
                var textarea = $(this).text().split('（')[0];

                if(txt.trim().length > 4){
                    $('.area').text(textarea);
                  }


                render(shopid,areaid);
            })
    
        }
    })




})

// 渲染产品

function render(shopid,areaid){
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getgsproduct',
        dataType: 'json',
        data: {
            shopid : shopid,
            areaid : areaid
        },
        success: function (data) {
            // console.log(data)
            var html = template('goodListTpl', data);
            $('.mmm_goodList ul').html(html);
    
    
        }
    })
}














})