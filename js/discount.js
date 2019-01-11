$(function () {
    // 渲染分类
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (data) {
            var html = template('cateTpl', data);
            $('.mmm_categroy').html(html);



            $('.cateName h3').each(function (index, ele) {
                var id = $(this).data('id');
                var cateList = $(this).next();
                // console.log(cateList);
                // 渲染分类列表
                $.ajax({
                    type: 'get',
                    url: 'http://127.0.0.1:9090/api/getcategory',
                    dataType: 'json',
                    data: {
                        titleid: id
                    },
                    success: function (data) {
                        // console.log(data);
                        var html = template('cateListTpl',data);
                        cateList.html(html);
                    }
                })
            })

        }
    })


// 点击显示与隐藏
    $('.mmm_categroy').on('click','h3',function(){
        console.log(1)
        $(this).siblings("i").toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
        $(this).siblings("div").slideToggle();
    })








})