import noUiSlider from 'nouislider'

export class PriceFilterRange {
	constructor() {
		this.rangeFilter = document.getElementById('price');

		this.init()
		this.dotsChange()
	}

	init() {
		noUiSlider.create(this.rangeFilter, {
			start: [20000, 80000],
			connect: true,
			margin: 5000,
			range: {
				'min': 1,
				'max': 100000
			}
		});

		this.keyupInput()
	}

	keyupInput() {
		const formInput = document.querySelector('#catalog-price-filter-js')
		formInput.addEventListener('keyup', (e) => {
			if(e.code === 'Enter') {
				const val1 =  document.querySelector('#min-price-filter-js').value
				const val2 =  document.querySelector('#max-price-filter-js').value
				this.inputChange(val1, val2)
			}
		})
	}

	dotsChange() {
		this.rangeFilter.noUiSlider.on('update', function (valueText) {
			document.querySelector('#min-price-filter-js').value = `${Math.ceil(valueText[0])}`
			document.querySelector('#max-price-filter-js').value = `${Math.ceil(valueText[1])}`
		});
		 // ₽
	}

	inputChange(v1, v2) {
		this.rangeFilter.noUiSlider.set([v1, v2]);
	}
}
