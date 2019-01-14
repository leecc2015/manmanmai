$(function () {
    // 品牌列表渲染

    var brandtitleid = getSearch("brandtitleid") || 0;
    var brandTitle = getSearch("brandTitle").split("十")[0];
    console.log(brandTitle);

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrand',
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid
        },

        success: function (data) {
            console.log(data)
            var html = template('brandTpl', data);
            $('.mmm_brand ul').html(html);

            $('.mmm_brand .title').text(brandTitle + "哪个牌子好");
            renderBrand(data, 0);

            var lis = $('.mmm_brand ul li');
            lis.on('click', function () {
                var index = $(this).index();

                renderBrand(data, index);

            })


        }
    })



    // 单个品牌商品渲染函数
    function renderBrand(data, index) {

        var brandtitleid = data.result[index].brandTitleId || 0;

        // console.log(brandtitleid);
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbrandproductlist',
            dataType: 'json',
            data: {
                brandtitleid: brandtitleid,
                pagesize: 4
            },
            success: function (data) {
                console.log(data);
                var html = template('singleTpl', data);
                $('.mmm_single ul').html(html);

                renderProduct(data,0);


                var lis = $('.mmm_single ul li');

                lis.on('click', function () {
                    var index = $(this).index();


                    renderProduct(data,index);

                })
            }
        })

    }

    // 单个商品渲染函数

    function renderProduct(data, index) {
            var productid = data.result[index].productId || 0;

            var picImg = data.result[index].productImg;
            var productName = data.result[index].productName;

        // console.log(picImg)
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductcom',
            dataType: 'json',
            data: {
                productid: productid
            },
            success: function (data) {
                console.log(data)
                var html = template('singleProductTpl', data);
                $('.mmm_singleProduct .list').html(html);
                $('.mess .pic1').html(picImg);
                $('.mess p').text(productName);
            }
        })

    }




})