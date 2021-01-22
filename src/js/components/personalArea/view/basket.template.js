import women from '../../../../images/bestsellers/1/img1.png'

export function basketTemplate() {
	return `
		<div class="Basket-table">
			<table>
				<tr>
					<th class="first-string" style="width: 393px">Наименование</th>
					<th class="first-string" style="width: 167px">Размер</th>
					<th class="first-string" style="width: 186px">Количество</th>
					<th class="first-string" style="width: 184px">Цена</th>
					<th class="first-string" style="width: 179px">Скидка</th>
					<th class="first-string" style="width: 331px">Сумма</th>
				</tr>
				<tr>
					<td>
						<div><img src="${women}" alt="" style="width: 128px;height: 193.03px;"></div>
					</td>
					<td></td>
				</tr>
			</table>
		</div>
	`
}