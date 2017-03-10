var dogContainer = document.getElementById("dogContainer");

function makeDom(xhrData) {
	var dogString = "" 
	var currentFood; 
	// console.log("currentFood", xhrData.dog_brands);
	
	for (var i = 0; i < xhrData.dog_brands.length; i++) {
		currentFood = xhrData.dog_brands[i];
		
		dogString += `<h3>${currentFood.name}</h3>`;

		for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
	  
			dogString += `<h3>${currentFood.types[j].type}</h3>`;
			// console.log("my type", xhrData.dog_brands[i].types);
			
			for (var k = 0; k < xhrData.dog_brands[i].types[j].volumes.length; k++) {

				dogString += `<h3>${currentFood.types[j].volumes[k].name}</h3>`;
				dogString += `<h3>${currentFood.types[j].volumes[k].price}</h3>`;
			}
		}

	}

		dogContainer.innerHTML = dogString;
}

function executeThisCodeAfterFileLoaded() {
	var data = JSON.parse(this.responseText);
	makeDom(data);	
	console.log(data);
}


function executeThisCodeAfterFileFails() {
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogFood.json"); //change dino json to current json file working on
myRequest.send();