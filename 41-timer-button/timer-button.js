var $timerButton = (function(){
        var  cfg = {
                    container:'body',
                    num:6,
                    title:'同意',
                    enable:false,
                    event:'lalala',
                };
    function show(config){
        //步骤1.DOM draw 2.event bind
        var num = cfg.num,timer;
        var $btn = $('<input class="timer-button" type="button" disabled>');
        $.extend(cfg,config);//用现在的config扩展原来的cfg
       $(cfg.container).append($btn);
        $btn.val(cfg.title+'('+num+'s)');
        if(cfg.enabled==='false'){
            timer = setInterval(function(){
                num--;
                if(num ===0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr('disabled');
                }else{
                    $btn.val(cfg.title+'('+num+'s)');
                }
            },1000);
            $btn.click(function(){
                alert(cfg.event)
            });
        }else{
            $btn.removeAttr('disabled');
            $btn.click(function(){
                timer = setInterval(function(){
                    num--;
                    if(num ===0){
                        clearInterval(timer);
                        $btn.val(cfg.title);
                        $btn.removeAttr('disabled');
                    }else{
                        $btn.val(cfg.title+'('+num+'s)');
                    }
                },1000);
            });
            num=cfg.num;
        }
    }
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