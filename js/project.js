var presentations=[
	/*{title:"Group 1: Shape Segmentation by Approximate Convexity Analysis", img:"./art/pst_1.png", file:"https://youtu.be/vAn2g0Gotso"},*/	
];

var Presentation=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"presentation", href:this.props.file, target:"_blank"},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"img"}
			),
			React.createElement(
				"div",
				{className:"titleDiv"},
				React.createElement(
					"div",
					{className:"cardTitle"},
					this.props.title
				)
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var presentEle=[];
		for(var a in presentations){
			presentEle.push(React.createElement(Presentation, {title:presentations[a].title, file:presentations[a].file, img:presentations[a].img}));
		}
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				"div",
				{id:"pstBody"},
				React.createElement(
					"div",
					{id:"pstInnerBody"},
					React.createElement(
						"div",
						{className:"title1"},
						"Project Presentation"
					),
					presentEle
				)
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.project="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));