var dogContainer = document.getElementById("dogContainer");

function makeDom(xhrData) {
	var dogString = "" 
	var currentFood; 
	for (var i = 0; i < xhrData.dog_brands.length; i++) {
		currentFood = xhrData.dog_brands[i];

		dogString += `<div class="col-sm-6 col-md-4">`;
		dogString += `<div class="thumbnail">`;
		dogString += `<h3>${currentFood.name}</h3>`;
		dogString += `</div></div>`;
  console.log("currentFood", currentFood);
	}

	for (var j = 0; j < xhrData.dog_brands.types; j++) {
		var currentType = xhrData.dog_brands.types[i];
		condole.log("my type", currentType);

		dogString += `<div class="col-sm-6 col-md-4">`;
		dogString += `<div class="thumbnail">`;
		dogString += `<h3>${currentFood.type}</h3>`;
		dogString += `</div></div></div>`;

	
	}
		dogContainer.innerHTML = dogString;
}

function executeThisCodeAfterFileLoaded() {
	console.log("Data Returned: ", data);
	var data = JSON.parse(this.responseText);
	makeDom(data);
}

function executeThisCodeAfterFileFails() {
	console.log("boooooo");
}
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogFood.json"); //change dino json to current json file working on
myRequest.send();