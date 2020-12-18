import noUiSlider from 'nouislider'

export function priceFilterRange() {
	const rangeFilter = document.getElementById('price');

	noUiSlider.create(rangeFilter, {
		start: [20000, 80000],
		connect: true,
		margin: 10000,
		range: {
			'min': 1,
			'max': 100000
		}
	});

	rangeFilter.noUiSlider.on('update', function (valueText) {
		document.querySelector('#min-price-filter-js').value = `${Math.ceil(valueText[0])} ₽`
		document.querySelector('#max-price-filter-js').value = `${Math.ceil(valueText[1])} ₽`
	});
}