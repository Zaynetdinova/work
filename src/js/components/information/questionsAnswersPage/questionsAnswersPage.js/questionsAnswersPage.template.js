import {transitionWrapper} from "../../../common/transitionTitle";
import {questionsAnswers} from "./view/questionsAnswers";
import {navigationInformationAboutShopping} from "../../../common/navigationInformationAboutShopping";
import {navigationMobile} from "../../../common/navigation-mobile";

export function QuestionsAnswersPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            <div class="title-shopping">О покупках</div>
            <div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('answer')}
           	    ${navigationMobile('/#information/about-shopping','вопросы – ответы','/#information/return')}
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