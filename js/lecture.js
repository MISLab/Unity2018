var lectures = [
	{ title: "Lecture 1 : Introduction to Unity & C#", img: "./art/week1_1.png", slideshow: "https://drive.google.com/drive/folders/1yrsa7OV3NQMOJwt4G84rO8xshy6Wu6d9", video: "" },
	{ title: "Lecture 2 : Scene & Basic Script Control", img: "./art/week1_1.png", slideshow: "https://drive.google.com/drive/folders/1qhhO8wX5n5sx7rKV4JJ1-Bj7jdY367iD?usp=sharing", video: "" },
	{ title: "Lecture 3 : UI & 2D Game Development", img: "./art/week1_1.png", slideshow: "https://drive.google.com/drive/folders/10CJJOf2egGBDgI9VGXAqvNaX3NpCq4dO", video: "" }
    //{ title: "Week 1 Afternoon: UI & Framework & IO of Unity", img: "./art/week1_2.jpg", slideshow: "https://drive.google.com/drive/folders/1t8DBTIkhPngyvW-4E8aauTdjE93i-Dkp?usp=sharing", video: "https://youtu.be/P3cT9mnVmw0" },
    //{ title: "Week 2 Morning: 2D Game Design", img: "./art/week2_1.jpg", slideshow: "https://drive.google.com/drive/u/1/folders/1Y11uizGPH16g3wzjThWrSzX_ND9KXkFj", video: "https://youtu.be/e-BnlTutzuQ" },
    //{ title: "Week 2 Afternoon: UI Design", img: "./art/week2_2.jpg", slideshow: "https://drive.google.com/drive/u/1/folders/1Y11uizGPH16g3wzjThWrSzX_ND9KXkFj", video: "https://youtu.be/hOwHyOFNACU" },
    //{ title: "Week 3: Create your first 3D scene", img: "./art/week3.png", slideshow: "https://drive.google.com/drive/u/1/folders/1QVoUgqS3IKPRNk7PYrEibUu8j5FL3byW", video: "" }
]

var Lecture = React.createClass({
	render: function () {
		var slideshowTemp;
		var videoTemp;
		var buttonCount = 0;
		if (this.props.slideshow != undefined) {
			buttonCount++;
		}
		if (this.props.video != undefined) {
			buttonCount++;
		}
		var buttonEle = [];
		if (this.props.slideshow != undefined) {
			buttonEle.push(React.createElement("a", { className: "slideshowB buttonCount" + buttonCount, href: this.props.slideshow, target: "_blank" }));
		}
		if (this.props.video != undefined) {
			buttonEle.push(React.createElement("a", { className: "videoB buttonCount" + buttonCount, href: this.props.video, target: "_blank" }));
		}
		return React.createElement(
			"div",
			{ className: "lecture" },
			React.createElement(
				"div",
				{ style: { "background-image": "url(" + this.props.img + ")" }, className: "lectureImg" }
			),
			React.createElement(
				"div",
				{ className: "lectureTitle" },
				this.props.title
			),
			React.createElement(
				"div",
				{ className: "cardButton" },
				buttonEle
			)
		);
	}
});

var Main = React.createClass({
	render: function () {
		var lecturesEle = [];
		for (var a in lectures) {
			lecturesEle.push(React.createElement(Lecture, { title: lectures[a].title, img: lectures[a].img, slideshow: lectures[a].slideshow, video: lectures[a].video }));
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
				{ id: "lectureBody" },
				lecturesEle
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.lecture = "currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));