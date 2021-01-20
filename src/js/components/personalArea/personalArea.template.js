import {transitionWrapper} from "../common/transitionTitle";

export function personalAreaTemplate() {
    return `
        <div class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <div class="exit">Выйти</div>
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