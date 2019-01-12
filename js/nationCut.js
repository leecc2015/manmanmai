$(function () {
    // 功能1 渲染详情

    var proid = getSearch("proid");;
    // console.log(proid)

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        dataType: 'json',
        data: {
            productid:proid
        },
        success: function (data) {
            console.log(data)
            var html = template('detailTpl', data);
            $('.mmm_detail').html(html);

            // $('ul').css{

            // }


        }
    })




})