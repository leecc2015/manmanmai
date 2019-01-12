$(function(){

// 功能1 渲染nav列表
$.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getindexmenu',
    dataType:'json',
    success:function( data ){
        var html = template('navTpl', data);
        $('.mmm_nav').html(html);
    }
})

$('.mmm_nav').on('click','a:nth-child(8)' ,function(e){
    e.preventDefault();
    $('.mmm_nav .hidden').toggle();
})

// 功能2 商品列表渲染
$.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType:'json',
    success:function( data ){
        console.log(data)
        var html = template('goodListTpl', data);
        $('.mmm_goodList ul').html(html);
    }
})









})