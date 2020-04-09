var timerButton = $(function(config){
        //课上代码
        var $btn = $('<input class="timer-button" type="button" value="同意(6s)" disabled>'),
                cfg = {
                    container:'body',
                    num:6,
                    title:'同意',
                    //onclick:
                },
                num = cfg.num,
                timer;
    // $btn.css({
    //     height:'50px',
    //     width:'100px'
    // });
    function show(){
        //步骤1.DOM draw 2.event bind
        //添加按钮
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num=cfg.num;

        $btn.val(cfg.title+'('+cfg.num+'s)')
        timer = setInterval(function(){
            num--;
            if(num ===0){
                clearInterval(timer);
                $btn.val('同意');
                $btn.removeAttr('disabled');
            }else{
                $btn.val('同意('+num+'s)');
            }
        },1000);
    }
    $btn.click(function(){
        // alert('就知道你会同意哒！')
        cfg.onclick();
    });
    return {
        show:show
    }
}());//匿名+小括号=>立即执行表达式

// 不用page load event
// 封装成对象方法
// 1.简单对象字面量，不完全是面向对象的，不能包括私有方法
// var timerbtn = {
//     show:function(){}
// }
// 2.工厂函数，一个函数返回值是一个简单对象
// var timerbtn = (function(){
//     return {
//         show:function(){}
//     }
// }())
// 实际上是个闭包，实现了作用域，只有放到了return里是公共的
// 3.构造函数
// function Timerbtn(){
// }
// vat tb = new Timerbtn