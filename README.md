# Pet-Food

## Instructions
>Build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.

>Create two separate JSON files to hold the data for dogs and cats using xhr data to get content back to the DOM.

### Screenshot
![pet-food](https://raw.githubusercontent.com/ellisthomas/pet-food/pets/screenshot/pet-food.jpg)

### Code sample
```
function makeDom(xhrData) {
  var dogString = "" 
  var currentFood; 
  
  for (var i = 0; i < xhrData.dog_brands.length; i++) {
    currentFood = xhrData.dog_brands[i];
    
    dogString += `<div class="col-lg-3 col-lg-3 col-lg-3 col-lg-3">`;
    dogString += `<div class="thumbnail">`;
    dogString += `<h2 class="doggy">${currentFood.name}</h2>`;

    for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
    
      dogString += `<h3 class="myType">${currentFood.types[j].type}</h3>`;
      
      for (var k = 0; k < xhrData.dog_brands[i].types[j].volumes.length; k++) {

        dogString += `<h3 class="toats">${currentFood.types[j].volumes[k].name}</h3>`;
        dogString += `<h3 class="money">${currentFood.types[j].volumes[k].price}</h3>`;
      }
    }
        dogString += `</div></div></div>`;
  }

    dogContainer.innerHTML = dogString;
}
```

### How to run (Node must be installed on your machine):
```
git clone git@github.com:ellisthomas/pet-food.git
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Languages Used
- HTML
- CSS
- JavaScript

### Contributors 
[Ellis Thomas](https://github.com/ellisthomas)
