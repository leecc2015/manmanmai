$(function(){


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrandtitle',
        dataType: 'json',
       
        success: function (data) {
            console.log(data)
            var html = template('brandTpl', data);
            $('.mmm_brand ul').html(html);
    
        }
    })
})