var currentPage={};
var Navigator = React.createClass({
	getInitialState:function(){
		return {navigatorState: false};
	},
	navigatorButtonOnClick:function(){
		this.setState({navigatorState:!this.state.navigatorState});
	},
	render: function() {
		return React.createElement(
			"ul",
			null,
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "./index.html", id:currentPage.index},
					"Unity2018"
				)
			),
			React.createElement(
				"div",
				{id:"navigatorButton", className:"navigatorButton"+this.state.navigatorState , onClick:this.navigatorButtonOnClick}
			),
			React.createElement(
				"div",
				{id:"background"+this.state.navigatorState, onClick:this.navigatorButtonOnClick}
			),
			React.createElement(
				"span",
				{id:"navigator", className:"navigator"+this.state.navigatorState},
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./about.html", id:currentPage.about},
						"About"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./lecture.html", id:currentPage.lecture},
						"Lecture"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./homework.html", id:currentPage.homework},
						"Homework"
					)
				),
				/*React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./reference.html", id:currentPage.reference},
						"Reference"
					)
				),*/
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./project.html", id:currentPage.project},
						"Project"
					)
				)
			)
		);
	}
});

var Footer=React.createClass({
	render: function(){
		return React.createElement(
			"footer",
			null,
			React.createElement(
				"div",
				{id:"footerBody"},
				React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{
							href:"http://web.ncku.edu.tw/bin/home.php",
							target:"_blank"
						},
						"National Cheng Kung University"
					)
					
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{
							href:"http://mislab.csie.ncku.edu.tw/",
							target:"_blank"
						},
						"Multimedia Information System Lab"
					)
				)
			)
		);
	}
});