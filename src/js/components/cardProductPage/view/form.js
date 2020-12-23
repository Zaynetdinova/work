import {star} from "./star";
import img1 from "../../../../images/icons/star.svg";
import img2 from "../../../../images/icons/star_empty.svg";
import load from '../../../../images/cardProduct/load.svg'

export function form() {
    return `
        <div class="review-and-question">Отзывы и вопросы</div>
        <form class="form"> 
            <input class="name" type="text" placeholder="Ваше имя">
            <div class="appraisal">
                <div class="title">Общая оценка</div>
                ${star(starItem)}
            </div>
            <div class="wrapper-size">
                <input class="input-size" type="text" placeholder="Размер">
                <div class="checkbox">
                    <div class="size"><input id="1" class="input" type="checkbox"><label for="1">Маломерит</label></div>
                    <div class="size"><input id="2" class="input" type="checkbox"><label for="2">Соответствует</label></div>
                    <div class="size"><input id="3" class="input" type="checkbox"><label for="3">Большемерит</label></div>
                </div>
            </div>            
            <input class="button-question" type="text" placeholder="Ваш вопрос или отзыв (не обязательно)">
            <input id="4" class="click" type="text">
            <label for="4" class="label">
                <img src="${load}" alt="">
                <div class="text">Кликните или перетащите, чтобы загрузить фотографии <br>
                (максимум 3 шт. 18 мегабайт)</div>
            </label>
            <div class="wrapper-button">
                <button class="cancel">Отменить</button>
                <button class="send">Отправить</button>
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