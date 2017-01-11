var apiurl = 'http://api.exchangeratelab.com/api/single/';

var state = {
	currencySelected: '',
	currencySymbol: {
		GBP: '£ ',
		EUR: '€ ',
		CAD: '$ ',
		AUD: '$ ',
		CNY: '¥ ',
		INR: '₹ ',
		JPY: '¥ '
			},
	rate: '',
	items: []
};

var settings = {
	url: ''
}

$('#currency-select').submit(function(event) {
	console.log('submit');
	event.preventDefault();
	searchTerm = $('#currency-query').val();
	retrieveFromAPI(searchTerm, displaySearchResults);
});


function retrieveFromAPI(searchTerm, callback) {
	console.log(searchTerm);
	state.currencySelected = searchTerm;
	var query = {
		apikey: '8E8DE93BC3058E1955BF5EAA3EBFF8A7',
		dataType: 'jsonp'
	}
	$.get(apiurl + searchTerm, query, callback)
}


function displaySearchResults(data) {
	console.log(data);
	var searchResults = [];
	state.rate = data.rate.rate;

	console.log(state.items);
	renderRates();
}


function renderRates() {
	var rate = '<div>' + state.currencySymbol[state.currencySelected] + state.rate + '</div>';
//	state.items.forEach(function(item){
//		rates += '<div>' + item.to + '<br/>' + item.rate + '</div>';
//	}); 
	$('#results-div').empty().append(rate)
	//$(state.items).html('#results-div')
}

//enter desired rate
//have an array of flag urls


/*
	if (data.data.weather.length > 0) {
    data.data.weather.forEach(function(item) {
    searchResults += '<p>' + item.totalSnowfall_cm + '</p>';
    });
 }
//push results into state opject
//location then weather
//each search adds new results div


  else {
    searchResults += '<p>No results</p>';
  }
  console.log(searchResults);
  $('#results-div').empty().append(searchResults);
}
// 
*/
