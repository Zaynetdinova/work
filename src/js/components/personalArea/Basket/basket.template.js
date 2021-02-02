import {transitionWrapper} from "../../common/transitionTitle";
import {navigation} from '../view/navigation'
import {basketPageTemplate} from "./view/basketPage.template";

export function basketTemplate() {
  return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            
            ${navigation('basket')}
            
            <div id="personal-area-content-js">
                ${basketPageTemplate()}
            </div>
        </div>
    `
}


let link = [
  {
    title: 'Личный кабинет',
    link: '/#personal-area'
  }
]
