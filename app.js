'use strict';



function displayImageInIconSet (filePath) {
	var images = window.document.querySelectorAll('#icons img');
	for (var i=0;i<images.length;i++) {
		images[i].src = filePath;
	}
}



window.onload = function () {

}	