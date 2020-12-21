import {Select} from '../../../core/JS/selectPlugin'

export function select() {
	new Select('#select-filter', {
		placeholder: '100',
		// selectedId: '2',
		data: [
			{id: '1', value: '60'},
			{id: '2', value: '100'}
		],
		onSelect(item) {
			console.log('Selected Item', item)
		}
	})

	new Select('#select-filter-mobile', {
		placeholder: '100',
		// selectedId: '2',
		data: [
			{id: '1', value: '60'},
			{id: '2', value: '100'}
		],
		onSelect(item) {
			console.log('Selected Item', item)
		}
	})

	new Select('#select-filter-popular-mobile', {
		placeholder: 'Популярные',
		type: 'test',
		// selectedId: '2',
		data: [
			{id: '1', value: 'Наш выбор'},
			{id: '2', value: 'Дешёвые'},
			{id: '3', value: 'Дорогие'},
			{id: '4', value: 'Новые'},
			{id: '5', value: 'Акции'},
			{id: '6', value: 'Скидки'},
			{id: '7', value: 'Популярные'},
			{id: '8', value: 'Старые'},
		],
		onSelect(item) {
			console.log('Selected Item', item)
		}
	})
}

