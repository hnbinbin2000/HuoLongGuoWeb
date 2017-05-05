var data={

  "nav":[
    {"id":"1","title":"新闻资讯"},
    {"id":"2","title":"产业动态"},
    {"id":"3","title":"领导关怀"}
  ],

	"media":[
		{"mediaImg":"images/new1.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":true},
		{"mediaImg":"images/new2.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false},
		{"mediaImg":"images/new3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false},
		{"mediaImg":"images/new4.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false},
		{"mediaImg":"images/new5.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaCont":"北海市位于广西北部湾畔，是国家历史文化名城。这里面向东南亚，背靠大西南，是西南出海大通道的重要出海口。","mediaFot":"贵州日报：2016-10-16","hot":false}
	],
	"media2":[
		{"id":"1", "mediaImg":"images/n1.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
		{"id":"2", "mediaImg":"images/n2.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
		{"id":"3", "mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
    {"id":"4", "mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
    {"id":"5", "mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"}
	],
  "media3":[
    {"id":"1", "mediaImg":"images/n1.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
    {"id":"2", "mediaImg":"images/n2.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
    {"id":"3", "mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
    {"id":"4", "mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"},
    {"id":"5", "mediaImg":"images/n3.png","mediaHeader":"习近平视察北海 写好新世纪海上丝路新篇章","mediaFot":"西部网 2017-06-12"}
  ]
}
//ajax调用最新数据  
var newdata=[{"mediaImg":"images/new1.png","mediaHeader":"新增加的","mediaCont":"新增加的","mediaFot":"贵州日报：2016-10-16","hot":false},{"mediaImg":"images/new1.png","mediaHeader":"新增加的","mediaCont":"新增加的","mediaFot":"贵州日报：2016-10-16","hot":false}]

var mediaList=new Vue({
  el: '#mediaList',
  data:data,
  computed:{
  	weatherData:function(){
  		return this.weather[0]
  	}
  },
  methods:{
    loadmore:function(){
      this.media.push.apply(this.media, newdata);
      console.log(newdata)
      return this.media;
    }

  }
})


  