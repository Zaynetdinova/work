import img1 from '../../../images/icons/baby.svg'
import img2 from '../../../images/icons/girl.svg'

import {IconImg} from "../common/icon";
import img3 from "../../../images/Categories/woman/img3.svg";
import img4 from "../../../images/Categories/woman/img4.svg";
import img5 from "../../../images/Categories/woman/img5.svg";
import img6 from "../../../images/Categories/girl/img6.svg";
import img7 from "../../../images/Categories/girl/img7.svg";
import img8 from "../../../images/Categories/girl/img8.svg";
import img9 from "../../../images/Categories/girl/img14.svg";
import img10 from "../../../images/Categories/girl/img10.svg";
import img11 from "../../../images/Categories/girl/img11.svg";
import img12 from "../../../images/Categories/girl/img9.svg";
import img13 from "../../../images/Categories/girl/img12.svg";
import img14 from "../../../images/Categories/girl/img13.svg";
import img15 from "../../../images/Categories/woman/img15.svg";
import img16 from "../../../images/Categories/woman/img16.svg";
import img17 from "../../../images/Categories/woman/img17.svg";
import img18 from '../../../images/Categories/girl/img1.svg';
import img19 from '../../../images/Categories/girl/img2.svg';
import img20 from '../../../images/Categories/girl/baby.svg';
import img21 from '../../../images/Categories/girl/img15.svg';
import img22 from '../../../images/Categories/girl/img16.svg';
import img23 from '../../../images/Categories/girl/img17.svg';


export function IconChildren() {
    return `
        <div class="Icon-children" id="sidebar-children-mobile">
            <div class="title-icon">
                
                ${dataSidebarGirl.map((item) => {
                  return  categoriesChoice(item) 
                }).join('')}
                
            </div>
            <div class="content-icon">
                <div class="content-icon-baby">
                    ${IconImg(baby)}
                </div>
                <div class="content-icon-girl">
                    ${IconImg(girl)}
                </div>
            </div>
        </div>
    `
}

function categoriesChoice(item) {
    const {id, name, img, month} = item
    return `
    <article class="wrap" data-type-children=${id}>
        <a class='link-children'>
            <div class="img img-${img}"></div>
            <div class='wrap-span'>
                <span class="item">${name}</span>
                <span class="month">${month}</span>
            </div>
        </a>
        <hr class="hr hr-${id}">
    </article>
    `
}

let dataSidebarGirl = [
    {
        id: 'children-baby',
        img: 'baby',
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
        id: 'children-girl',
        img: 'girl',
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]

let baby = [
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Категория'
    },
    {
        img: img20,
        title: 'Скидки'
    },
]


let girl = [
    {
        img: img18,
        title: 'Платья'
    },
    {
        img: img19,
        title: 'Блузки'
    },
    {
        img: img3,
        title: 'трикотаж'
    },
    {
        img: img4,
        title: 'брюки'
    },
    {
        img: img5,
        title: 'ЮБКИ'
    },
    {
        img: img6,
        title: 'школа'
    },
    {
        img: img7,
        title: 'жакеты'
    },
    {
        img: img8,
        title: 'верхняя одежда'
    },
    {
        img: img12,
        title: 'КОЛГОТКИ И НоСКИ'
    },
    {
        img: img10,
        title: 'Нижнее белье'
    },
    {
        img: img11,
        title: 'купальники'
    },
    {
        img: img9,
        title: 'костюмы',
    },
    {
        img: img13,
        title: 'комбинезоны'
    },
    {
        img: img14,
        title: 'боди'
    },
    {
        img: img21,
        title: 'для дома'
    },
    {
        img: img22,
        title: 'аксессуары'
    },
    {
        img: img23,
        title: 'обувь'
    },
    {
        img: img16,
        title: 'новинки'
    },
    {
        img: img15,
        title: 'скидки'
    },
    {
        img: img17,
        title: 'акции'
    }
]