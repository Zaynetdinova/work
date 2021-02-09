import {transitionWrapper} from "../../../common/transitionTitle";
import {questionsAnswers} from "./view/questionsAnswers";
import {navigationInformationAboutShopping} from "../../../common/navigationInformationAboutShopping";

export function QuestionsAnswersPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            <div class="title-shopping">О покупках</div>
            <div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('answer')}
            </div>
            ${questionsAnswers()}
        </div>
    `
}

let link = [
    {
        title: 'Ответы на вопросы',
        link: '/#information/question-answers'
    }
]