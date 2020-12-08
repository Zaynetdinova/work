import img1 from '../../../../images/Categories/woman/img1.svg'
import img2 from '../../../../images/Categories/woman/img2.svg'
import img3 from '../../../../images/Categories/woman/img3.svg'
import img4 from '../../../../images/Categories/woman/img4.svg'
import img5 from '../../../../images/Categories/woman/img5.svg'
import img6 from '../../../../images/Categories/woman/img6.svg'
import img7 from '../../../../images/Categories/woman/img7.svg'
import img8 from '../../../../images/Categories/woman/img8.svg'
import img9 from '../../../../images/Categories/woman/img9.svg'
import img10 from '../../../../images/Categories/woman/img10.svg'
import img11 from '../../../../images/Categories/woman/img11.svg'
import img12 from '../../../../images/Categories/woman/img12.svg'
import img13 from '../../../../images/Categories/woman/img13.svg'
import img14 from '../../../../images/Categories/woman/img14.svg'
import img15 from '../../../../images/Categories/woman/img15.svg'
import img16 from '../../../../images/Categories/woman/img16.svg'
import img17 from '../../../../images/Categories/woman/img17.svg'



export function IconImg() {
    return `
        <div class="Icon-img">${icon(item)}</div>
    `
}

function icon(item) {

    const items = item.map((item) => {
        return `
        <div class="box">
            <img src=${item.img} alt="">
			<div class="title">${item.title}</div>
        </div>    
            
        `
    })
    return `${items.join('')}`
}



let item = [
    {
        img: img1,
        title: 'Платья'
    },
    {
        img: img2,
        title: 'Трикотаж'
    },
    {
        img: img3,
        title: 'ВЕРХА'
    },
    {
        img: img4,
        title: 'НИЗЫ'
    },
    {
        img: img5,
        title: 'ЮБКИ'
    },
    {
        img: img6,
        title: 'ВЕРХНЯЯ ОДЕЖДА'
    },
    {
        img: img7,
        title: 'костюмы'
    },
    {
        img: img8,
        title: 'для дома'
    },
    {
        img: img9,
        title: 'спорт'
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
        img: img12,
        title: 'КОЛГОТКИ И НоСКИ'
    },
    {
        img: img13,
        title: 'аксессуары'
    },
    {
        img: img14,
        title: 'большие размеры'
    },
    {
        img: img15,
        title: 'новинки'
    },
    {
        img: img16,
        title: 'скидки'
    },
    {
        img: img17,
        title: 'акции'
    }
]