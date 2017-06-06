$(document).ready(function(){
    // 08登录页table切换
    $(".center-right4Span1").on("click",function(){
        $("#tab1").css("display","block");
        $("#tab2").css("display","none");
        $(".center-right4Span1").addClass("switch").siblings().removeClass("switch");
    })
    $(".center-right4Span2").on("click",function(){
         $("#tab2").css("display","block")
         $("#tab1").css("display","none");
        $(".center-right4Span2").addClass("switch").siblings().removeClass("switch");
    })
   
})