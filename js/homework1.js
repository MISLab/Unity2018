var File=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"file", href:this.props.file},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"fileImg"}
			),
			React.createElement(
				"div",
				{className:"filename"},
				this.props.filename
			)
		);
	}
});


var Tutorial=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"tutorialBody"},
			React.createElement(
				"h1",
				null,
				"Homework 1"
			),

			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Requirement"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Final project proposal (*.ppt, *.doc, *.pdf, …) (80%)",						
					React.createElement(
						"br",
						null
					)
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Design your UI in Unity for your final project on PC (10%)",						
					React.createElement(
						"br",
						null
					)
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Build Unity on the mobile device with your game UI design (10%)",						
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"div",
						{className:"listInfo"},
						"Install Java Development Kit (JDK)",						
						React.createElement(
							"br",
							null
						)
					),
					React.createElement(
						"div",
						{className:"listInfo"},
						"Install Android Software Development Kit (SDK)",						
						React.createElement(
							"br",
							null
						)
					),
					React.createElement(
						"div",
						{className:"listInfo"},
						"Build a Unity program on your mobile device",						
						React.createElement(
							"br",
							null
						)
					)
				)
			),

			 React.createElement(
				"div",
				{className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Download Homework Description & Unity Building Guide for Android/IOS"
				),
				React.createElement(
					File,
					{filename:"Homework Description & Unity Building Guide for Android", img:"./art/unity-android.png", file:"./file/UnityHW1.pdf"}
				),
				React.createElement(
					File,
					{filename:"Unity Building Guide for IOS", img:"./art/unity.png", file:"./file/UnityIOS.pdf"}
				)
			),

			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Homework Submission"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Submit \"Student ID.zip\" to Moodle, the file only should include your proposal.",						
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"div",
						{className:"alert"},
						"Deadline: 2017/11/24 22:00"
					)
				)
			)
		)
	}
});

var Main = React.createClass({
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
				Tutorial,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.homework="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));