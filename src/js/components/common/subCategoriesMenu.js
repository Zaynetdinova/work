import {sidebarChoice} from "./sidebarChoice";

export function subCategoriesMenu() {
  return `
    <div class="Mobile-sub-menu">
    <div>Платье</div>
    <div>Выйти</div>
      <div class="categories ">
        ${sidebarChoice(category)}
      </div>
    </div>
  `
}

const category = [
  {
    id: 'dress',
    category: 'Платья'
  },
  {
    id: 'jersey',
    category: 'Трикотаж'
  },
  {
    category: 'Верха'
  },
  {
    category: 'Низы'
  },
  {
    category: 'Юбки'
  },
  {
    category: 'Верхняя одежда'
  },
  {
    category: 'Костюмы'
  },
  {
    category: 'Для дома'
  },
  {
    category: 'Спорт'
  },
  {
    category: 'Нижнее белье'
  },
  {
    category: 'Купальники'
  },
  {
    category: 'Колготки и Носки'
  },
  {
    category: 'Большие размеры'
  },
  {
    category: 'Аксессуары'
  },
  {
    category: 'Новинки'
  },
  {
    category: 'Акции'
  },
  {
    category: 'Скидки'
  },
]
