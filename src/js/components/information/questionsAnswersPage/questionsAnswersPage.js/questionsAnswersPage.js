import {Component} from "../../../../core/Component";
import {QuestionsAnswersPageTemplate} from "./questionsAnswersPage.template";
import {toggleShowInformation} from "../../../../core/utils/utils";


export class QuestionsAnswersPage extends Component {
    static className = 'Questions-answers'

    constructor($root) {
        super($root, {
            name: 'QuestionsAnswersPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return QuestionsAnswersPageTemplate()
    }

    onClick(e) {
        if(e.target.closest('[data-parent-question-js]')) {
            const element = e.target.closest('[data-parent-question-js]');

            switch (element.id) {
                case 'first-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-first-title-js]')
                    break;
                case 'second-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-second-title-js]')
                    break;
                case 'third-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-third-title-js]')
                    break;
                case 'fourth-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-fourth-title-js]')
                    break;
                case 'fifth-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-fifth-title-js]')
                    break;
                case 'sixth-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-sixth-title-js]')
                    break;
                case 'seventh-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-seventh-title-js]')
                    break;
                case 'eighth-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-eighth-title-js]')
                    break;
                case 'ninth-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-ninth-title-js]')
                    break;
                case 'tenth-question-title-js':
                    toggleShowInformation('[data-questions-answers-page-tenth-title-js]')
                    break;
            }
        }
    }
}