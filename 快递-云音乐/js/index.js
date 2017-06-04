window.onload = function(){
	var oKnowUs = document.getElementById("KnowUs");
	oKnowUs.onmouseover = function(){
		this.src = "img/whiteKnowUs.png";
	}
	oKnowUs.onmouseout = function(){
		this.src = "img/KnowUs.png";
	}

	var oMorethan = document.getElementById("morethan");
	oMorethan.onmouseover = function(){
		this.src = "img/redmorethan.png";
	}
	oMorethan.onmouseout = function(){
		this.src = "img/morethan.png";
	}

	var oBetter = document.getElementById("better");
	oBetter.onmouseover = function(){
		this.src = "img/redbetter.png";
	}
	oBetter.onmouseout = function(){
		this.src = "img/better.png";
	}

	var oMoreQuestion = document.getElementById("more-question");
	oMoreQuestion.onmouseover = function(){
		this.src = "img/WhiteMoreQuestion.png";
	}
	oMoreQuestion.onmouseout = function(){
		this.src = "img/MoreQuestion.png";
	}
}