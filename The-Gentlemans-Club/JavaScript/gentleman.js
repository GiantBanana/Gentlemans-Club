//Slideshow Start

var myImage = document.getElementById("mugshots");

var imageArray = ["Pictures/MugShots/anders.jpg", "Pictures/MugShots/isak.jpg", "Pictures/MugShots/ola.jpg", "Pictures/MugShots/andre.jpg", "Pictures/MugShots/tord.jpg"];
var imageIndex = 0; 

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}


var intervalHandle = setInterval(changeImage,5000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};

//Slideshow slutt

//Dropdown meny start
function dropdownFunction1() {
    document.getElementById("myDrinks").classList.toggle("show");
}

function dropdownFunction2() {
    document.getElementById("myTrips").classList.toggle("show");
}

function dropdownFunction3() {
    document.getElementById("myDrinks").classList.remove("show");
}

function dropdownFunction4() {
    document.getElementById("myTrips").classList.remove("show");
}