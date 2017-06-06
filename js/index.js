$(document).ready(function(){
// 首页轮播图
function banner(){         
        var $img=$(".banner-div img");
        var $li=$(".banner li");        
        var i=0;
        var num=$li.length-1;
        var timer=0;
        function k(){
            if(i<num){
                $img.eq(i).stop().fadeOut().next().stop().fadeIn();
                $li.removeClass("red").eq(i+1).addClass("red");
                i++;
            }else{
                $img.eq(num).stop().fadeOut();
                $img.eq(0).stop().fadeIn();
                $li.removeClass("red").eq(0).addClass("red");
                i=0;
            }
        }
        function h(){
            if(i>0){
                $img.eq(i).stop().fadeOut().prev().stop().fadeIn();
                $li.removeClass("red").eq(i-1).addClass("red");
                i--;
            }else{
                $img.eq(0).stop().fadeOut();
                $img.eq(num).stop().fadeIn();
                $li.removeClass("red").eq(num).addClass("red");
                i=num;
            }

        }
        $(".lt").on("click",function(){
            clearInterval(timer);
            h();
        })  
        $(".gt").on("click",function(){
           clearInterval(timer);
            k();
        }); 
        
        $li.mousemove(function(){
            clearInterval(timer);
            var now=$(this).index();
            $li.removeClass("red");
            $(this).addClass("red");
            $img.eq(now).stop().fadeIn().siblings().stop().fadeOut();
            i=now;
        })

        var timer=setInterval(k, 3000);
        $(".banner-div").hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(k, 3000); 
        })
    };
banner();

})


