 $(".nav li").hover(function(){
        $(this).find("ul").stop(true, true).slideDown()
      },function(){
      	//setTimeout(alert(1),10000)
      	// setTimeout(aa, 3000 )
      	$(this).find("ul").stop(true, true).slideUp()

      })

 $(".collapse").movebg({width:86/*滑块的大小*/,extra:10/*额外反弹的距离*/,speed:100/*滑块移动的速度*/,rebound_speed:100/*滑块反弹的速度*/});




	$.getUrlParam = function(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
	}
