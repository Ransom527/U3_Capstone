// http://api.worldweatheronline.com/free/v2/ski.ashx
//HTTP: http://api.worldweatheronline.com/premium/v1/ski.ashx
var apiurl = 'http://api.worldweatheronline.com/premium/v1/ski.ashx';
var days = 5;
var state = {
	address: '',
	items: []
};


$('#search-form').submit(function(event) {
		console.log('submit');
		event.preventDefault();
		searchTerm = $('#query-text').val();
		retrieveFromAPI(searchTerm, days, displaySearchResults);
		//displaysearchresuls is callback
});


function retrieveFromAPI(searchTerm, days, callback) {
	//callback not supported?
	console.log(searchTerm);
	var query = {
		q: searchTerm,
		num_of_days: days,
		key: '584ee9d7e5ae405887443400170301',
		format: 'json'
	}
	$.getJSON(apiurl, query, callback)
} //callback?



function displaySearchResults(data) {
	console.log(data);
	var searchResults = '';
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

/*
parameters:
p search term
format json
key 584ee9d7e5ae405887443400170301

*/