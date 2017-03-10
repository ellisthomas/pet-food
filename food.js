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

function executeThisDogAfterFileLoaded() {
	var data = JSON.parse(this.responseText);
	makeDom(data);	
	console.log(data);
}


var catContainer = document.getElementById("catContainer");

function makeDom2(xhrData) {
	var catString = "" 
	var currentCatFood; 
	// console.log("currentCatFood", xhrData.dog_brands);
	
	for (var x = 0; x < xhrData.cat_brands.length; x++) {
		currentCatFood = xhrData.cat_brands[x];
		
		catString += `<h3>${currentCatFood.name}</h3>`;

		for (var y = 0; y < xhrData.cat_brands[x].types.length; y++) {
	  
			catString += `<h3>${currentCatFood.types[y].type}</h3>`;
			// console.log("my type", xhrData.cat_brands[i].types);
			
			for (var z = 0; z < xhrData.cat_brands[x].types[y].volumes.length; z++) {

				catString += `<h3>${currentCatFood.types[y].volumes[z].name}</h3>`;
				catString += `<h3>${currentCatFood.types[y].volumes[z].price}</h3>`;
			}
		}

	}

		catContainer.innerHTML = catString;
}
function executeThisCatAfterFileLoaded() {
	var data = JSON.parse(this.responseText);
	makeDom2(data);	
	console.log(data);
}


function executeThisDogAfterFileFails() {
}

function executeThisCodeAfterFileFails() {
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisDogAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogFood.json"); //change dino json to current json file working on
myRequest.send();


var myRequestCat = new XMLHttpRequest();
myRequestCat.addEventListener("load", executeThisCatAfterFileLoaded);
myRequestCat.addEventListener("error", executeThisCodeAfterFileFails);
myRequestCat.open("GET", "catFood.json"); //change dino json to current json file working on
myRequestCat.send();





