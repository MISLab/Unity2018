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
				"Homework 2"
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
					"Bricks breaking game from the course of week 2 + 2D animation (60%)",						
					React.createElement(
						"br",
						null
					)
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Other creativity (40%)",						
					React.createElement(
						"br",
						null
					)
				)
			),

			 React.createElement(
				"div",
				{className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Download Homework Description"
				),
				React.createElement(
					File,
					{filename:"Homework Description", img:"./art/hw2.png", file:"./file/UnityHW2.pdf"}
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
					"Upload the link of your project folder (*.zip) in your cloud storage (Google Drive) to Moodle",						
					React.createElement(
						"div",
						{className:"listInfo"},
						"(將你的project資料夾打包成*.zip，並上傳至你的雲端硬碟，將雲端硬碟的連結上傳至Moodle)",						
					),
					React.createElement(
						"div",
						{className:"alert"},
						"Deadline: 2017/12/1 22:00"
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