mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYXJhYnljaGluYSIsImEiOiJja3VpdmFyOTIycnVzMm5tbzE0d3Zpa2s5In0.xDX1bZmXfmwge_6f6H53kw';

const map = new mapboxgl.Map({
	container: 'map', 
	style: 'mapbox://styles/annarabychina/ckukw70c4589i17s0vjg47k5c', 
	center: [2.335464, 48.860625], 
	zoom: 16
});

const marker1 = new mapboxgl.Marker({ color: '#030303'})
                .setLngLat([2.3364, 48.86091])
				.addTo(map); 

const marker2 = new mapboxgl.Marker({ color: '#666666'})
                .setLngLat([2.3333, 48.8602])
				.addTo(map); 

const marker3 = new mapboxgl.Marker({ color: '#666666'})
                .setLngLat([2.3397, 48.8607])
				.addTo(map); 

const marker4 = new mapboxgl.Marker({ color: '#666666'})
                .setLngLat([2.3330, 48.8619])
				.addTo(map); 

const marker5 = new mapboxgl.Marker({ color: '#666666'})
                .setLngLat([2.3365, 48.8625])
				.addTo(map); 