$(function(){


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getsitenav',
        dataType: 'json',
       
        success: function (data) {
            console.log(data)
            var html = template('sitenavTpl', data);
            $('.mmm_coupon ul').html(html);
    
        }
    })
})