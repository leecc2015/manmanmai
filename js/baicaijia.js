$(function () {

    //功能1 渲染标题


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            var html = template('titleTpl', data);
            $('.mmm_title ul').html(html);

            // 声明一个变量存储titleid
            var titleid = 0;
            render(titleid);
            // 功能2 导航栏滑动
            $(window).on('load resize', function () {
                //标题部分区域滚动
                //动态计算ul的宽度
                var ul = $('.mmm_title ul');
                var lis = ul.children();
                // console.log(lis);

                var width = 0;

                lis.each(function (i, v) {
                    width += $(v).width();

                    $(v).on('click', function () {
                        console.log($(this));
                        $(this).find('a').addClass('active').siblings().removeClass('active');
                    })

                })

                lis.on('click', function () {
                    // console.log($(this).find('a'));
                    $(this).find('a').addClass('active')
                    $(this).siblings().find('a').removeClass('active');

                    titleid = $(this).data('titleid');

                    // console.log(titleid);
                    render(titleid);

               
                })

                ul.width(width);

                new IScroll('#wrapper', {
                    scrollY: false,
                    scrollX: true
                })
            })

        }


    

    })


//  渲染商品

    function render(titleid){

                 $.ajax({
                    type: 'get',
                    url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
                    dataType: 'json',
                    data: {
                        titleid: titleid
                    },
                    success: function (data) {
                        console.log(data)
                        var html = template('goodListTpl', data);
                        $('.mmm_goodList ul').html(html);

                    }
                })
    } 







})