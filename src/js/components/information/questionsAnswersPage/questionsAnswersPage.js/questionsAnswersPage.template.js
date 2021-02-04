import {transitionWrapper} from "../../../common/transitionTitle";
import {questionsAnswers} from "./view/questionsAnswers";

export function QuestionsAnswersPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            <div class="title-shopping">О покупках</div>
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