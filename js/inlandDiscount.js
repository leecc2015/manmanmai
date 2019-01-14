$(function () {
var length = 0;
var n=0;

    render(8);

    function render(num) {

        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getinlanddiscount',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                var arr = [];

                length = data.result.length;

                for (var i = 0; i < num; i++) {
                    arr[i] = data.result[i]
                }
                // console.log(arr);
                var html = template('goodListTpl', { arr: arr });
                $('.mmm_productList ul').html(html);
            }
        })
    }


    // 功能2 下拉加载功能

   

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        // console.log(scrollTop);

        var height = $(window).height();
        // console.log(height);
        // console.log(length);
        

        var lastTop = $(".mmm_footer").offset().top;
        // console.log(lastTop);
        if (scrollTop + height > lastTop) {
            // $('.mmm_tips').trigger('click');
            // console.log(num<=length);
            // console.log(num);

            n++;
            num = 8+4*n;
            if (num > length){
                num = length;
                
            }

            render(num);
            if (num<length){
                $('.mmm_tips p').text('加载中...');
            }else{
                $('.mmm_tips p').text('没有更多数据了');

                setTimeout(function(){
                    $('.mmm_tips p').fadeOut();
                },3000);
            }
        }
    })















})



