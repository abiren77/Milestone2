var isExpanded = false;

element = document.getElementById("hamburgerMenu");
element.addEventListener("click", function(evt){
	evt.preventDefault()
	var menuToExpand = document.getElementById("nav").getElementsByTagName("LI");
	expandHamburger(menuToExpand);
});

function expandHamburger(menuToExpand){

	if(isExpanded == false){

		for (var i = 0, len = menuToExpand.length; i < len; i++) {
		  menuToExpand[i].style.display = "block";
		}

		document.getElementById("hamburgerMenu").src= "img/x-mark-48.png"

		isExpanded = true;
	} else {
		isExpanded = false;

		var menuToExpand = (document.getElementById("nav").getElementsByTagName("LI"));

		for (var i = 0, len = menuToExpand.length; i < len; i++) {
		  menuToExpand[i].style.display = "none";
		}	

		document.getElementById("hamburgerMenu").src= "img/nav.svg.png"

	}

}