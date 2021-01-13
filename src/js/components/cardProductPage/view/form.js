import {star, star2} from './star'
import load from '../../../../images/cardProduct/load.svg'
import arrow from '../../../../images/icons/arrow2.svg'
import {Statistics} from "./statistics";
import photo1 from '../../../../images/cardProduct/photo1.png'
import {gratitude} from "./gratitude";

export function form() {
    return `
        <form class="form form-js-show">
            <article id="form-js" class="wrapper-title">
                <div class="review-and-question">Отзывы и вопросы</div>
                <img class="arrow" src="${arrow}" alt="arrow">
            </article>
            <div id="regulate-form-and-statistics-js" class="content-form">
                ${formWrapper()}
                ${Statistics()}
                ${gratitude()}
                ${reviews(info)}     
            </div>
        </form>
    `
}


function formWrapper() {
    return `
        <div class="form-wrapper">
                <input class="name" type="text" placeholder="Ваше имя">
                <div class="appraisal">
                    <div class="title">Общая оценка</div>
                    ${star2()}
                </div>
                <div class="wrapper-size">
                    <input class="input-size" type="text" placeholder="Размер (не обязательно)">
                    <div class="checkbox">
                        <div class="size"><input id="1" class="input" type="radio" name="topic1"><label for="1">Маломерит</label></div>
                        <div class="size"><input id="2" class="input" type="radio" name="topic1"><label for="2">Соответствует</label></div>
                        <div class="size"><input id="3" class="input" type="radio" name="topic1"><label for="3">Большемерит</label></div>
                    </div>
                </div>            
                <textarea class="button-question" cols="20" rows="2" maxlength="500" placeholder="Ваш вопрос или отзыв (не обязательно)"></textarea>
            
                <div id="drop-area-js" class="drop-area">
                  <form>
                  <div class="cloud">
                        <i class="img"><img src="${load}" alt=""></i>
                        <i class="text">Кликните или перетащите, чтобы загрузить фотографии (максимум 3 шт, 18 мегабайт)</i>
                  </div>
                    
                    <input class="file-elem-input"  type="file" id="fileElem" multiple accept="image/*">
                    <label  class="button" for="fileElem"></label>
                  </form>
                
                  <div id="file-name" class="file-name"></div>
             
                </div>
                
                <div class="wrapper-button">
                   
                        <article id="cancel-form-js" class="cancel">Отменить</article>
                   
                    
                    <button class="send">Отправить</button>
                </div>        
            </div>   
    `
}

function reviews(item) {
  const items = item.map((item) => {
    return `
            <div class="wrapper-reviews">
                <div class="nameClient">
                    <div class="name">Имя Фамилия</div>
                    <div class="data">20.11.2020</div>
                </div>
                <div class="wrap">${star()}</div>
                <div class="size-text">
                    <div class="size">Размер: 134</div>
                    <div class="text">Соответствует</div>
                </div>
                <div class="description">${item.description}</div>
                <img class="photo" src="${item.photo}" alt="">
            </div>
        `
  })
  return `${items.join('')}`
}

const info = [
  {
    description: 'Короткое женское платье прямого кроя с поясом на талии из основной ткани. Рукава длинные с манжетами на кнопке, спинка с застежкой на пуговицу.' +
      ' Отличное платье для любительниц строго стиля и минимализма в одежде. ' +
      'Отличный выбор для современной женщины. ВНИМАНИЕ!!! ' +
      'Города, закрытые для отгрузки: Хабаровск, <span style="white-space: nowrap">Петропавловск-Камчатский</span> ' +
      'Владивосток, Краснодар, Самара, Шахты.',
  },
  {
    description: 'Короткое женское платье прямого кроя с поясом на талии из основной ткани. Рукава длинные с манжетами на кнопке, спинка с застежкой на пуговицу.',
    photo: photo1
  },
]
