fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=37941fae&app_key=145610e978a84fb10a175dacdf5acfc9%09&mealType=Snack').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
    console.log(data.hits.recipe);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
function appendData(data) {
    var mainContainer = document.getElementById("data");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
      mainContainer.appendChild(div);
    }
  };
  appendData();