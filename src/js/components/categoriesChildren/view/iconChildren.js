import {IconImg} from "../../common/icon";
import img3 from "../../../../images/categories/woman/img3.svg";
import img4 from "../../../../images/categories/woman/img4.svg";
import img5 from "../../../../images/categories/woman/img5.svg";
import img6 from "../../../../images/categories/girl/img6.svg";
import img7 from "../../../../images/categories/girl/img7.svg";
import img8 from "../../../../images/categories/girl/img8.svg";
import img9 from "../../../../images/categories/girl/img14.svg";
import img10 from "../../../../images/categories/girl/img10.svg";
import img11 from "../../../../images/categories/girl/img11.svg";
import img12 from "../../../../images/categories/girl/img9.svg";
import img13 from "../../../../images/categories/girl/img12.svg";
import img14 from "../../../../images/categories/girl/img13.svg";
import img15 from "../../../../images/categories/woman/img15.svg";
import img16 from "../../../../images/categories/woman/img16.svg";
import img17 from "../../../../images/categories/woman/img17.svg";
import img18 from '../../../../images/categories/girl/img1.svg';
import img19 from '../../../../images/categories/girl/img2.svg';
import img20 from '../../../../images/categories/girl/baby.svg';
import img21 from '../../../../images/categories/girl/img15.svg';
import img22 from '../../../../images/categories/girl/img16.svg';
import img23 from '../../../../images/categories/girl/img17.svg';


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
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'верхняя одежда',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'КОЛГОТКИ И НоСКИ',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Категория',
        link: '/#catalog'
    },
    {
        img: img20,
        title: 'Скидки',
        link: '/#catalog'
    },
]
let girl = [
    {
        img: img18,
        title: 'Платья',
        link: '/#catalog'
    },
    {
        img: img19,
        title: 'Блузки',
        link: '/#catalog'
    },
    {
        img: img3,
        title: 'трикотаж',
        link: '/#catalog'
    },
    {
        img: img4,
        title: 'брюки',
        link: '/#catalog'
    },
    {
        img: img5,
        title: 'ЮБКИ',
        link: '/#catalog'
    },
    {
        img: img6,
        title: 'школа',
        link: '/#catalog'
    },
    {
        img: img7,
        title: 'жакеты',
        link: '/#catalog'
    },
    {
        img: img8,
        title: 'верхняя одежда',
        link: '/#catalog'
    },
    {
        img: img12,
        title: 'КОЛГОТКИ И НоСКИ',
        link: '/#catalog'
    },
    {
        img: img10,
        title: 'Нижнее белье',
        link: '/#catalog'
    },
    {
        img: img11,
        title: 'купальники',
        link: '/#catalog'
    },
    {
        img: img9,
        title: 'костюмы',
        link: '/#catalog'
    },
    {
        img: img13,
        title: 'комбинезоны',
        link: '/#catalog'
    },
    {
        img: img14,
        title: 'боди',
        link: '/#catalog'
    },
    {
        img: img21,
        title: 'для дома',
        link: '/#catalog'
    },
    {
        img: img22,
        title: 'аксессуары',
        link: '/#catalog'
    },
    {
        img: img23,
        title: 'обувь',
        link: '/#catalog'
    },
    {
        img: img16,
        title: 'новинки',
        link: '/#catalog'
    },
    {
        img: img15,
        title: 'скидки',
        link: '/#catalog'
    },
    {
        img: img17,
        title: 'акции',
        link: '/#catalog'
    }
]