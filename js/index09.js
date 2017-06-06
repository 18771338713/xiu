window.onload=function(){
// 第9页详情页打折活动倒计时
    function GetRTime(){
       var Day=document.getElementById("day");
       var Hour=document.getElementById("hour");
       var Minute=document.getElementById("minute");
       var Second=document.getElementById("second");
       var NowTime = new Date();
       var EndTime= new Date('2017/10/01 00:00:00');
       var t =EndTime.getTime() - NowTime.getTime();//指定日期减去当前日期，获得剩余时间
       var d=Math.floor(t/1000/60/60/24);
       var h=Math.floor(t/1000/60/60%24);
       var m=Math.floor(t/1000/60%60);
       var s=Math.floor(t/1000%60);
       if(t<=0){
           clearInterval(l);
           alert("折扣活动已结束,如需购买需原价付款");
       }else{
           Day.innerHTML = d;
           Hour.innerHTML = h;
           Minute.innerHTML = m ;
           Second.innerHTML = s;
        }
   }
   var l=setInterval(GetRTime,0);
 
//第9页详情页table切换
   var oLeft1=document.getElementById("center-bannerLeft1");
   var oImg=oLeft1.getElementsByTagName("img")[0];
   var oLeft2=document.getElementById("center-bannerLeft2");
   var oUl=oLeft2.getElementsByTagName("ul")[0];
   var oLi=oUl.getElementsByTagName("li");
   for(let i=0;i<oLi.length;i++){
    oLi[i].onclick=function(){
      oImg.src=`images/09/${i+1}.jpg`;
    }
   }
// 第9页详情页添加减少购买数量
  var Reduce=document.getElementById("reduce");
  var Plus=document.getElementById("plus");
  var N=document.getElementById("number");
  Plus.onclick=function(){
    N.value=parseInt(N.value)+1;
  }
  Reduce.onclick=function(){
    if(N.value==0){
      N.value=0;
    }else{
      N.value=parseInt(N.value)-1;
    }
    
  }
}