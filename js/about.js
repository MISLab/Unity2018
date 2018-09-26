var About = React.createClass({
	render : function(){ 
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"About"
			),
			React.createElement(
				"p",
				null,
				"本課程共18小時，教授程式設計基礎概念，並以Unity遊戲程式範例引導學生快速入門遊戲程式設計。每堂課程均搭配多位助教協助授課，確保學生在實際操作Unity與撰寫程式遇到困難時，可即時詢問解惑。透過兩次作業與一個專題實作，全班共同發揮創意完成一系列探索台南歷史人文風情之闖關小遊戲。"
			)
		);
	}
});

var Person = React.createClass({
	render:function(){
		var personEle = [];
		if(this.props.title){
			personEle.push(React.createElement("div",{className:"personInfo"},this.props.title));
		}
		if(this.props.company){
			personEle.push(React.createElement("div",{className:"personInfo"},this.props.company));
		}
		if(this.props.mail){
			personEle.push(React.createElement("div",{className:"personInfo"},"E-mail: "+this.props.mail));
		}
		if(this.props.office){
			personEle.push(React.createElement("div",{className:"personInfo"},"Office: "+this.props.office));
		}
		return React.createElement(
			"div",
			{className:"person"},
			React.createElement(
				"div",
				{className:"personName"},
				this.props.name
			),personEle
		)
	}
});


var Lecturers = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"Lecturer"
			),
			React.createElement(
				Person,
				{name:"Min Chun Hu", title:"Assistant Professor", company:"National Cheng Kung University", office:"R65B08, 11F, CSIE New Building"}
			)
		)
	}
});

var Grade = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"grade"},
			React.createElement(
				"div",
				{className:"gradeItem"},
				this.props.item
			),
			React.createElement(
				"div",
				{className:"gradeScore"},
				this.props.score
			)
		);
	}
});

var Grading = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"Grading"
			),
			React.createElement(
				Grade,
				{item:"Attending", score:"10%"}
			),
			React.createElement(
				Grade,
				{item:"Homework 1", score:"25%"}
			),
			React.createElement(
				Grade,
				{item:"Homework 2", score:"25%"}
			),
			React.createElement(
				Grade,
				{item:"Project", score:"40%"}
			),
		)
	}
});

var TAs = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"ta", className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"TAs"
			),
			React.createElement(
				Person,
				{name:"許友綸"}
			),
			React.createElement(
				Person,
				{name:"蔡菀倫"}
			),
			React.createElement(
				Person,
				{name:"陳建文"}
			),
			React.createElement(
				Person,
				{name:"陳文正"}
			),
			React.createElement(
				Person,
				{name:"彭建瑋"}
			),
			React.createElement(
				Person,
				{name:"張矽晶"}
			),
			React.createElement(
				Person,
				{name:"蘇俐文"}
			),
			React.createElement(
				"div",
				{className:"personInfo"},
				"E-mail: Unity@mislab.csie.ncku.edu.tw"
			),
			React.createElement(
				"div",
				{className:"personInfo"},
				"Office: R65601, 6F, CSIE New Building"
			)
		)
	}
});

var AboutBody = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"aboutBody"},
			React.createElement(
				"div",
				{id:"leftContent"},
				React.createElement(
					About,
					null
				)
			),
			React.createElement(
				"div",
				{id:"rightContent"},
				React.createElement(
					Lecturers,
					null
				),
				React.createElement(
					Grading,
					null
				),
				React.createElement(
					TAs,
					null
				)
			)
		);
	}
});

var Main  =  React.createClass({
	render: function() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				AboutBody,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.about = "currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));