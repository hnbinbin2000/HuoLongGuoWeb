var data={
	"media":[
		{"mediaImg":"images/new1.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":true},
		{"mediaImg":"images/new2.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false},
		{"mediaImg":"images/new3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false},
		{"mediaImg":"images/new4.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false},
		{"mediaImg":"images/new5.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false}
	],
	"media2":[
		{"mediaImg":"images/n1.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
		{"mediaImg":"images/n2.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
		{"mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"}
	],
	"weather":[
		{"stationImg":"url(images/weather.png)","station":"北京", "weatherCont":{"a":"20°C","b":"23","c":"-1.38","d":"西北","e":"0","f":"0","g":"23","h":"50"}, "default":true},
		{"stationImg":"url(images/weather1.png)", "station":"上海","weatherCont":{"a":"28°C","b":"23","c":"-1.38","d":"西北","e":"0","f":"0","g":"23","h":"50"}, "default":false}
	],
	"news":[
		{"title":"写好新世纪海上丝路新篇章","time":"2017-01-02"},
		{"title":"写好新世纪海上丝路新篇章","time":"2017-01-02"}
	]

}

var mediaList=new Vue({
  el: '#mediaList',
  data:data,
  computed:{
  	weatherData:function(){
  		return this.weather[0]
  	}
  },
  methods:{
  	left:function(){
  		$(".bgchange").fadeIn(200)
  		$(".bgchange").fadeOut()
        var dele_value=this.weather.shift();
        this.weather.push(dele_value);
        
        return this.weather;


        //在数组末尾追加数组第一个元素，返回数组现在长度
        //var return_value=this.weather.push(dele_value);
  	},
  	right:function(){
  		$(".bgchange").fadeIn(200)
  		$(".bgchange").fadeOut(200)
		var dele_value=this.weather.pop();
        this.weather.unshift(dele_value);
        return this.weather;
  	}

  	// weatherData:function(event){
  	// 	if (event=='left') {
  	// 		cont -= 1;
  	// 		alert(this.weather[0].stationImg)
  	// 		return this.weather[0]
  			
  	// 	}
  	// 	else if(event=='right'){
  	// 		cont += 1;
  	// 		alert(this.weather[1].stationImg)
  	// 		return this.weather[1]
  			
  	// 	}else{
  	// 		return this.weather[0]
  	// 	}
  	// }

  }
})
function bgchange(){
          $(".rgt-banner,.blur").css({"background":"url("+wLength[cont].stationImg+")"},1000)
          $(".blur").css({"background-size":"103%"})
          $(".bgchange").fadeOut()
      }