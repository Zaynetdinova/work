import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {QuestionsAnswersPage} from "../../components/information/questionsAnswersPage/questionsAnswersPage.js/questionsAnswersPage";
import {Footer} from "../../components/footer/Footer";


export class AboutQuestionsAnswers extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                QuestionsAnswersPage,
                Footer,
            ]
        })
        return this.app.getRoot()
    }

    afterRender() {
        this.app.init()
        super.afterRender()
    }
}