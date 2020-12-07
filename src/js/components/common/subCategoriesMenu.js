import {sidebarChoice} from "./sidebarChoice";

export function subCategoriesMenu() {
  return `
    <div class="Mobile-sub-menu">
      <div class="main-sub-menu">  
        <div class="title-sub-menu">Платья</div>
        <div class="button-back" id="sub-categories-menu-close">
            <div class="back"></div>
            <div class="text-back">НАЗАД</div>
        </div>
        
      </div> 
      <div class="categories">
        ${sidebarChoice(category)}
      </div>
    </div>
  `
}

const category = [
  {
    id: 'dress',
    category: 'Повседневные'
  },
  {
    id: 'jersey',
    category: 'Офисные'
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
