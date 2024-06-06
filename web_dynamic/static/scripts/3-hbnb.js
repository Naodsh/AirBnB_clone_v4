$(document).ready(function() {
	const selectedAmenities = {};
	$('input[type="checkbox"]').change(function() {
		const amenityId = $(this).data('id');
		const amenityName = $(this).data('name');
	        if ($(this).is(':checked')) {
	            selectedAmenities[amenityId] = amenityName;
	        } else {
	            delete selectedAmenities[amenityId];
	        }
	        const amenitiesList = Object.values(selectedAmenities).join(', ');
	        $('.amenities h4').text(amenitiesList);
	});

	// API status check
	$.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
		if (data.status === 'OK') {
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	});

	// Fetch places
	$.ajax({
		url: 'http://0.0.0.0:5001/api/v1/places_search/',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({}),
		success: function(data) {
			for (const place of data) {
				const article = $('<article></article>');
				article.append(`<div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div>`);
				article.append(`<div class="information"><div class="max_guest">${place.max_guest} Guests</div><div class="number_rooms">${place.number_rooms} Bedrooms</div><div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div></div>`);
				article.append(`<div class="description">${place.description}</div>`);
				$('.places').append(article);
			}
		}
	});
});
