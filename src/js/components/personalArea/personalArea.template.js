import {transitionWrapper} from "../common/transitionTitle";
import {navigation} from './view/navigation'


export function personalAreaTemplate() {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <div class="exit">Выйти</div>
            </div>
            
            ${navigation()}
            
            <div id="personal-area-content-js"></div>
        </div>
    `
}

let link = [
    {
        title: 'Личный кабинет',
        link: '/#personal-area'
    }
]
