$(function(){

// 渲染优惠券列表

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcoupon',
        dataType: 'json',
        // data: {
        //     productid: proid
        // },
        success: function (data) {
            console.log(data)
            var html = template('couponTpl', data);
            $('.mmm_coupon ul').html(html);


        }
    })








})