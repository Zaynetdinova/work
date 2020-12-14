import {sidebarPoint} from "./sidebarPoint";


export  function categoriesMenuSidebar() {
    return `
        <div class="CategoriesMenuSidebar">
            <div class="points">
                <div class="sidebar">
                    ${sidebarPoint(point,'notArrow')}               
                </div>
            </div>
        </div>
    `
}
let point =
    [
        {
            title: 'Платья',
            id: 'new1',
            img: false,
            category: [
                {
                    category: 'Повседневные'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
                {
                    category: 'Выпускные'
                },
                {
                    category: 'Кружевные'
                },
                {
                    category: 'Пляжные'
                },
                {
                    category: 'Свадебные'
                },
            ],
        },
        {
            title: 'Трикотаж',
            id: 'new2',
            img: false,
            category: [
                {
                    category: 'Платья'
                },
                {
                    category: 'Жакеты'
                },
                {
                    category: 'Джемперы'
                },
                {
                    category: 'Свитера'
                },
                {
                    category: 'Кофты'
                },
                {
                    category: 'Худи, толстовки'
                },
                {
                    category: 'Кардиганы'
                },
                {
                    category: 'Водолазки'
                },
                {
                    category: 'Туники'
                },
                {
                    category: 'Пуловеры'
                },
                {
                    category: 'Жилеты'
                },
            ],
        },
        {
            title: 'Верха',
            id: 'new3',
            img: false,
            category: [
                {
                    category: 'Блузы'
                },
                {
                    category: 'Джемпера'
                },
                {
                    category: 'Праздничное'
                },
                {
                    category: 'Кофточки'
                },
                {
                    category: 'Рубашки'
                },
                {
                    category: 'Поло'
                },
                {
                    category: 'Водолазки'
                },
                {
                    category: 'Топы и майки'
                },
                {
                    category: 'Лонгсливы'
                },
                {
                    category: 'Туники'
                },
                {
                    category: 'Толстовки, ветровки'
                },
                {
                    category: 'Футболки'
                },
                {
                    category: 'Худи'
                },
                {
                    category: 'Жилеты'
                },
                {
                    category: 'Боди'
                },
                {
                    category: 'Болеро'
                },
            ]
        },
        {
            title: 'Низы',
            id: 'new4',
            img: false,
            category: [
                {
                    category: 'Брюки'
                },
                {
                    category: 'Джинсы'
                },
                {
                    category: 'Бриджи, капри'
                },
                {
                    category: 'Леггинсы'
                },
                {
                    category: 'Шорты'
                },
                {
                    category: 'Кюлоты'
                },
                {
                    category: 'Тайтсы'
                },
                {
                    category: 'Велосипедки'
                },
            ]
        },
        {
            title: 'Юбки',
            id: 'new5',
            img: false,
            category: [
                {
                    category: 'Мини'
                },
                {
                    category: 'Миди'
                },
                {
                    category: 'Макси'
                },
                {
                    category: 'В колено'
                },
                {
                    category: 'Джинсовые'
                },
                {
                    category: 'Кружевные'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Вязаные'
                },
                {
                    category: 'Кожаные'
                },
                {
                    category: 'Праздничные'
                },
                {
                    category: 'Расклешенные (трапеции)'
                },
                {
                    category: 'Футляры (прямые)'
                },
            ]
        },
        {
            title: 'Верхняя одежда',
            id: 'new6',
            img: false,
            category: [
                {
                    category: 'Пальто'
                },
                {
                    category: 'Пуховики'
                },
                {
                    category: 'Куртки'
                },
                {
                    category: 'Парки'
                },
                {
                    category: 'Пиджаки'
                },
                {
                    category: 'Плащи'
                },
                {
                    category: 'Пончо'
                },
                {
                    category: 'Тренчи'
                },
                {
                    category: 'Кожаные куртки'
                },
                {
                    category: 'Бомберы'
                },
                {
                    category: 'Жакеты'
                },
                {
                    category: 'Жилеты'
                },
            ],
        },
        {
            title: 'Костюмы',
            id: 'new7',
            img: false,
            category: [
                {
                    category: 'Юбочные'
                },
                {
                    category: 'Брючные'
                },
                {
                    category: 'Комбезные'
                },
                {
                    category: 'Платье с жакетом'
                },
                {
                    category: 'Спортивные'
                },
                {
                    category: 'Карнавальные'
                },
            ],
        },
        {
            title: 'Для дома',
            id: 'new8',
            img: false,
            category: [
                {
                    category: 'Лонгсливы'
                },
                {
                    category: 'Топы, майки'
                },
                {
                    category: 'Футболки'
                },
                {
                    category: 'Туники'
                },
                {
                    category: 'Худи, толстовки'
                },
                {
                    category: 'Платья'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Пижамы'
                },
                {
                    category: 'Спортивки (верха)'
                },
                {
                    category: 'Спортивка (низы)'
                },
                {
                    category: 'Халаты'
                },
                {
                    category: 'Ночные сорочки'
                },
                {
                    category: 'Брюки'
                },
                {
                    category: 'Бриджи, шорты'
                },
                {
                    category: 'Комплекты передпостельные'
                },
            ],
        },
        {
            title: 'Спорт',
            id: 'new9',
            img: false,
            category: [
                {
                    category: 'Рашгарды'
                },
                {
                    category: 'Тайтсы'
                },
                {
                    category: 'Футболки'
                },
                {
                    category: 'Шорты'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Брюки'
                },
                {
                    category: 'Капри'
                },
                {
                    category: 'Куртки, ветровки'
                },
                {
                    category: 'Лонгсливы'
                },
                {
                    category: 'Толстовки, туники'
                },
                {
                    category: 'Худи'
                },
                {
                    category: 'Топы'
                },
                {
                    category: 'Майки'
                },
                {
                    category: 'Топы-бра'
                },
            ],
        },
        {
            title: 'Нижнее белье',
            id: 'new10',
            img: false,
            category: [
                {
                    category: 'Трусы стринги'
                },
                {
                    category: 'Трусы слипы'
                },
                {
                    category: 'Трусы бразильяна'
                },
                {
                    category: 'Трусы танга'
                },
                {
                    category: 'Трусы хипстеры'
                },
                {
                    category: 'Шорты'
                },
                {
                    category: 'Панталоны'
                },
                {
                    category: 'Боди'
                },
                {
                    category: 'Бюстгальтеры'
                },
                {
                    category: 'Топы-бра'
                },
                {
                    category: 'Топы, майки'
                },
                {
                    category: 'Белье корректирующее'
                },
                {
                    category: 'Пояса для чулок'
                },
                {
                    category: 'Комплекты нижнего белья'
                },
                {
                    category: 'Белье в стиле "спорт"'
                },
                {
                    category: 'Термобелье'
                },
                {
                    category: 'Корсеты'
                },
                {
                    category: 'Эротическое белье'
                },
            ],
        },
        {
            title: 'Купальники',
            id: 'new11',
            img: false,
            category: [
                {
                    category: 'Раздельные'
                },
                {
                    category: 'Слитные'
                },
                {
                    category: 'Пляжная одежда'
                },
                {
                    category: 'Парео'
                },
                {
                    category: 'Бюстгальтеры'
                },
                {
                    category: 'Трусы'
                },
            ],
        },
        {
            title: 'Колготки и Носки',
            id: 'new12',
            img: false,
            category: [
                {
                    category: 'Классические'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
            ],
        },
        {
            title: 'Аксессуары',
            id: 'new13',
            img: false,
            category: [
                {
                    category: 'Бейсболки'
                },
                {
                    category: 'Береты'
                },
                {
                    category: 'Шарфы, снуды'
                },
                {
                    category: 'Шапки, комплекты'
                },
                {
                    category: 'Маски'
                },
                {
                    category: 'Повязки'
                },
                {
                    category: 'Гетры'
                },
                {
                    category: 'Перчатки и варежки'
                },
                {
                    category: 'Митенки'
                },
                {
                    category: 'Пледы'
                },
                {
                    category: 'Ремни, пояса'
                },
                {
                    category: 'Сумки, клатчи'
                },
                {
                    category: 'Платки, палантины'
                },
                {
                    category: 'Обувь'
                },
                {
                    category: 'Очки'
                },
                {
                    category: 'Для волос'
                },
                {
                    category: 'Заколки'
                },
                {
                    category: 'Диадемы'
                },
                {
                    category: 'Колье, цепочки, бусы, ожерелья'
                },
                {
                    category: 'Кольца'
                },
                {
                    category: 'Браслеты'
                },
                {
                    category: 'Комплекты, серьги, каффы'
                },
                {
                    category: 'Броши'
                },
                {
                    category: 'Перчатки ажурные'
                },
                {
                    category: 'Товары для взрослых'
                },
                {
                    category: 'Портупеи'
                },
                {
                    category: 'Карновальные маски'
                },
                {
                    category: 'Карновальные аксессуары'
                },
                {
                    category: 'Зонты'
                },
                {
                    category: 'Парики'
                },
            ],
        },
        {
            title: 'Большие размеры',
            id: 'new14',
            img: false,
            category: [
                {
                    category: 'Повседневные'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
            ],
        },
        {
            title: 'Новинки',
            id: 'new15',
            img: false,
            category: [
                {
                    category: 'Повседневные'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
            ],
        },
        {
            title: 'Скидки',
            id: 'new16',
            img: false,
            category: [
                {
                    category: 'Повседневные'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
            ],
        },
        {
            title: 'Акции',
            id: 'new17',
            img: false,
            category: [
                {
                    category: 'Повседневные'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
            ],
        },
    ]