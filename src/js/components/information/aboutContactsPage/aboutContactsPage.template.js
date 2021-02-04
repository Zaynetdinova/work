import {transitionWrapper} from "../../common/transitionTitle";

export function aboutContactsPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О магазине</div>
            <div class="title-contacts">Контактная информация</div>
        </div>
    `
}
let link = [
    {
        title: 'Контакты',
        link: '/#information/contacts'
    }
]