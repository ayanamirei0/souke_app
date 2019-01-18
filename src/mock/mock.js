import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
	timeout:1000  //设置请求延时时间
})
// const getdata = function(option){ //定义请求数据方法
// 	let datalist = []
// 	for (let i = 0; i < 20; i += 1) {
// 	  const o = {  //mockjs模拟随机生成数据，生成20条
// 	//    recipeId: Random.guid(),
// 	//    billId: Random.string(10),
// 	//    orgId: Random.string('number', 8, 10),
// 	//    Date:Random.date('yyyy-MM-dd'),
// 	//    time:Random.time('A HH:mm:ss'),
// 	//    adress:Random.county(),
// 	//    viewName: Random.cword(4, 16), // 随机生成任意名称
// 	//    personName: Random.cname(),
// 	//    reason: Random.csentence(10, 32),

// 			title:Random.cword(4, 16),
// 			id:Random.string(10),
// 			ClassNumber:Random.string('number', 8, 10),
// 			ClassTime:'周六上午09：00-10：30',
// 			address:'东城区广渠门鼎新',
// 			addressUrl:'https://www.juren.com',
// 			OpeningHours:'2018/05/05-2018/11/17',
// 			ContinuationClass:'续课',
// 			type:'秋季',
// 			ClassType:'增开',
// 			TeacherPic:'./static/pic1.jpg',
// 			TeacherName:'李向阳',
// 			TeacherUrl:'https://www.juren.com',
// 			money:'4100',
// 	  }
// 	  datalist.push(o)
// 	 }
// 	return{
// 		data:datalist
// 	}
// }
Mock.Random.extend({
	type: function (date){
		 var city = [ "春季" , "暑假" , "秋季" , "寒假" ];
		 return  this .pick(city);
	},
	ClassType: function (date){
		var city = [ "增开" , "热报" , "满班" , "剩余2人" ];
		return  this .pick(city);
   },
   address: function (date){
		var city = [ "东城区广渠门鼎新" , "朝阳姚家园校区" , "石景山八角西街校区" , "通州果园新华联校区" ];
		return  this .pick(city);
	 },
	 state_text: function (date){
		var city = [ "已停班" , "未结课" , "未开班" , "已结课" ];
		return  this .pick(city);
   }
})
//console.log(M.mock( " @test " ));

Mock.mock(RegExp('/user' + ".*"), /post|get/i,{
    "code": 0,
    "data|1-10": [{
		title:"@ctitle",
		'id|+1':1,
		ClassNumber:'@float',
		ClassTime:'周六上午09:00 - 10:30',
		address:'@address',
		addressUrl:'https://www.juren.com',
		OpeningHours:'2018/05/05-2018/11/17',
		ContinuationClass:'续课',
		type:'@type',
		ClassType:'@ClassType',
		TeacherPic:'./static/pic1.jpg',
		TeacherName:'李向阳',
		TeacherUrl:'https://www.juren.com',
		money:'4100',
		


		// boolean:'@boolean',
		// natural:'@natural',
		// integer:'@integer',
		// float:'@float',
		// character:'@character',
		// string:'@string',
		// range:'@range',
		// date:'@date',
		// time:'@time',
		// datetime:'@datetime',
		// now:'@now',
		// image:'@image',
		// dataImage:'@dataImage',
		// color:'@color',
		// paragraph:'@paragraph',
		// word:'@word',
		// title:'@title',
		// cparagraph:'@cparagraph',
		// cword:'@cword',
		// ctitle:'@ctitle',
		// first:'@first',
		// last:'@last',
		// name:'@name',
		// cfirst:'@cfirst',
		// domain:'@domain',
		// area:'@area',
		// guid:'@guid',
		// capitalize:'@capitalize',
		// upper:'@upper',
		// shuffle:'@shuffle'

	}],
    "msg": "success"
}) //调用模拟数据方法


Mock.mock(RegExp('/items' + ".*"), /post|get/i,{
    "code": 0,
    "data": [
		{
			text: '幼儿',               
			children: [
			  {
				text: '初一年级',
				id: 1001
			  },
			  {
				text: '初二年级',
				id: 1002
			  },
			  {
				text: '初三年级',
				id: 1003
			  },
			  {
				text: '全部初中',
				id: 1004
			  }
			]
		  },
		   {
			text: '小学',               
			children: [
			  {
				text: '初一年级',
				id: 1005
			  },
			  {
				text: '初二年级',
				id: 1006
			  },
			  {
				text: '初三年级',
				id: 1007
			  },
			  {
				text: '全部初中',
				id: 1008
			  }
			]
		  },
		   {
			text: '初中',               
			children: [
			  {
				text: '初一年级',
				id: 1009
			  },
			  {
				text: '初二年级',
				id: 1010
			  },
			  {
				text: '初三年级',
				id: 1011
			  },
			  {
				text: '全部初中',
				id: 1012
			  }
			]
		  }
		  ,
		   {
			text: '高中',               
			children: [
			  {
				text: '高一年级',
				id: 1013
			  },
			  {
				text: '高二年级',
				id: 1014
			  },
			  {
				text: '高三年级',
				id: 1015
			  },
			  {
				text: '全部高中',
				id: 1016
			  }
			]
		  }
	],
    "msg": "success"
}) //调用模拟数据方法


Mock.mock(RegExp('/SearchLessonsDetails' + ".*"), /post|get/i,{
	"code": 0,
	"data":
		{
			ShoppingVolume:'1',
			title:'初一数学启思·卓越班',
			url:'SearchLessonsDetails/15',
			ClassNumber:'1800511776',
			ClassTime:'周六上午09:00 - 10:30',
			address:'东城区广渠门鼎新',
			addressUrl:'https://www.juren.com',
			OpeningHours:'2018/05/05-2018/11/17',
			ContinuationClass:'续课',
			type:'秋季',
			ClassType:'增开',
			TeacherPic:'/static/pic1.jpg',
			TeacherName:'李向阳',
			TeacherUrl:'https://www.juren.com',
			money:'4100',
			Timetable:[
				{
					ClassHour:'第01课',
					text:'05/05',
					BeOverdue:true
				},
				{
					ClassHour:'第02课',
					text:'05/05',
					BeOverdue:true
				},
				{
					ClassHour:'第03课',
					text:'05/05',
					BeOverdue:true
				},
				{
					ClassHour:'第04课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第05课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第06课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第07课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第08课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第09课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第10课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第11课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第12课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第13课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第14课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第15课',
					text:'05/05',
					BeOverdue:false
				},
				{
					ClassHour:'第16课',
					text:'05/05',
					BeOverdue:false
				}
				],
				state:1,
				statetext:'报名',

		}
,
	"msg": "success"
}) //调用模拟数据方法


Mock.mock(RegExp('/login' + ".*"), /post|get/i,{
	"code": 0,
	"msg": "success"
}) //调用模拟数据方法



Mock.mock(RegExp('/MyCourse' + ".*"), /post|get/i,{
	"code": 0,
	"data|1-10": [{
	title:"@ctitle",
	'id|+1':1,
	ClassNumber:'@float',
	address:'@address',
	addressUrl:'https://www.juren.com',	
	type:'@type',
	Explain:'第1课：12月28日 周六上午09:00 - 10:30',
	state_text:'@state_text',
	MyCourse_state:3,
}],
	"msg": "success"
}) //调用模拟数据方法