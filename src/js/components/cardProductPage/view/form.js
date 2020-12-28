import {star} from "./star";
import img1 from "../../../../images/icons/star.svg";
import img2 from "../../../../images/icons/star_empty.svg";
import load from '../../../../images/cardProduct/load.svg'

export function form() {
    return `
        <form class="form">
            <div class="review-and-question">Отзывы и вопросы</div> 
            <div class="form-wrapper">
                <input class="name" type="text" placeholder="Ваше имя">
                <div class="appraisal">
                    <div class="title">Общая оценка</div>
                    ${star(starItem)}
                </div>
                <div class="wrapper-size">
                    <input class="input-size" type="text" placeholder="Размер">
                    <div class="checkbox">
                        <div class="size"><input id="1" class="input" type="radio" name="topic1"><label for="1">Маломерит</label></div>
                        <div class="size"><input id="2" class="input" type="radio" name="topic1"><label for="2">Соответствует</label></div>
                        <div class="size"><input id="3" class="input" type="radio" name="topic1"><label for="3">Большемерит</label></div>
                    </div>
                </div>            
                <textarea class="button-question" placeholder="Ваш вопрос или отзыв (не обязательно)"></textarea>
            
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
                    <button class="cancel">Отменить</button>
                    <button class="send">Отправить</button>
                </div>        
            </div>   
        </form>
    `
}

let starItem = [
    {
        star: img1,
        starEmpty: img2
    }
]