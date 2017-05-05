var data={

  "nav":[
    {"id":"1","title":"新闻资讯"},
    {"id":"2","title":"产业动态"},
    {"id":"3","title":"领导关怀"}
  ],
	"content": {
        "title": "新闻标题",
        "info": "日期：2017-4-21 来源：北京 作者：管理员 发布部门：信息网 点击数：5",
        "content": '<p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p><img src="images/banner2.png"><p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>',
        "label": [
            {"title": "北京(1)"},
            {"title": "北京(3)"}
        ]
    },
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
  ],
  "news":[
    {"title":"习近平视察北海 写好新世纪海上丝路新篇章","time":"2017-12-12"}
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


  