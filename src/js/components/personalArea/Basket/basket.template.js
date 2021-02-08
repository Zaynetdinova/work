import {transitionWrapper} from "../../common/transitionTitle";
import {basketPageTemplate} from "./view/basketPage.template";
import {navigation} from "../../common/navigation";

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
