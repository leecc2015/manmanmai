$(function () {

    // 功能1 渲染详情

    var proid = getSearch("proid");;
    // console.log(proid)

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproduct',
        dataType: 'json',
        data: {
            productid: proid
        },
        success: function (data) {
            // console.log(data)
            var html = template('detailTpl', data);
            $('.mmm_good .detail').html(html);

            // 功能2 渲染三级分类

            var brand = getSearch("brand");
            $(".mmm_nav .thirdList-3").text(brand + ' >')

           var cateId = data.result[0].categoryId;
        //    console.log(cateId)
            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:9090/api/getcategorybyid',
                dataType: 'json',
                data: {
                    categoryid: cateId
                },
                success: function (data) {
                    // console.log(data)
                    // console.log(data.result.category)
                    

                    $(".mmm_nav .thirdList-2").text(data.result[0].category + ' >')
                }
            })

        }

    })

    // 功能3 渲染评论框
    var proCom = getSearch("proCom");
    // console.log(proCom);
    $(".mmm_good .comm").text(proCom);


     // 功能4 渲染评论列表

     $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductcom',
        dataType: 'json',
        data: {
            productid: proid
        },
        success: function (data) {
            console.log(data)
            var html = template('commentTpl', data);
            $('.mmm_comment ul').html(html);

        }
    })

})