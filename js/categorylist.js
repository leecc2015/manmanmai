$(function () {

    // 功能1 渲染三级菜单
    // 获取页面传过来的参数id
    var cateId = location.search.split('=')[1] || 0;
    // console.log(cateId );
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        dataType: 'json',
        data: {
            categoryid: cateId
        },
        success: function (data) {
            console.log(data)
            var html = template('thirdListTpl', data);
            $('.thirdList').html(html);
        }
    })


    var pageId = 1;
    var pageCount = 0;


    // 功能2 渲染产品列表
    render(pageId);


    // 功能3 点击切换分页
    $('.mmm_page .prev').on('click', function () {
        pageId--
        if (pageId < 1) {
            pageId = 1;
            return;
        }
        render(pageId);
    })

    $('.mmm_page .next').on('click', function () {
        pageId++;
        if (pageId > pageCount) {
            pageId = pageCount;
            return;
        }
        render(pageId);
    })

    $('.mmm_page select').on('change', function () {
        var val = $(this).val();
        pageId = val;
        console.log(pageId);
        render(pageId);
    })






    function render(pageId) {
        
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductlist',
            dataType: 'json',
            data: {
                categoryid: cateId,
                pageid: pageId
            },
            success: function (data) {
                console.log(data);

                var html = template('goodListTpl', data);
                $('.mmm_goodList ul').html(html);

                pageCount = Math.ceil(data.totalCount / data.pagesize);
                // console.log(pageCount)
                var arr = [];
           
                for (var i = 1; i <= pageCount; i++) {
                    arr[i - 1] = i + "/" + pageCount;
                 }
                 // console.log(arr);
                 var htmlStr = template('pageListTpl', { arr: arr });
                 $('.mmm_page select').html(htmlStr);
                 console.log(pageId);

                 $('.mmm_page select option').eq(pageId - 1).prop('selected', true);
                //  console.log($('.mmm_page select option'))
            }
        })
    }

    



})