import {transitionWrapper} from "../../common/transitionTitle";

export function aboutContactsPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О магазине</div>
            
        </div>
    `
}
let link = [
    {
        title: 'Хлебные крошки',
        link: '/#information/contacts'
    }
]