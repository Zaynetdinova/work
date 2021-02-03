import '../styles/style.scss'
import 'swiper/swiper-bundle.css';
import {Router} from './core/routes/Router'
import {MainPage} from './pages/MainPage'
import {ViewCategoriesPage} from './pages/ViewCategoriesPage'
import {CatalogPage} from './pages/CatalogPage'
import {ViewCategoriesChildren} from './pages/ViewCategoriesChildren'
import {CardProduct} from './pages/CardProduct'
import 'nouislider/distribute/nouislider.css';
import {BasketPage} from "./pages/PersonalAreaPage/BasketPage";
import {PersonalDataPage} from "./pages/PersonalAreaPage/PersonalData";


import {AboutShopping} from './pages/informationPage/AboutShopping';
import {BonusesPage} from "./pages/PersonalAreaPage/BonusesPage";
import {AboutPayment} from "./pages/informationPage/AboutPayment";
import {AboutQuestionsAnswers} from "./pages/informationPage/AboutQuestionsAnswers";



window.userRegistry = false

new Router('#app', {
  mainPage: MainPage,
  viewCategoriesPage: ViewCategoriesPage,
  viewCategoriesIndex: CatalogPage,
  viewCategoriesChildren: ViewCategoriesChildren,
  cardProduct: CardProduct,
  personalAreaBasket: BasketPage,
  personalAreaData: PersonalDataPage,
  personalAreaBonusesPage: BonusesPage,
  aboutShoppingPage: AboutShopping,
  aboutPaymentPage: AboutPayment,
  aboutQuestionAnswers: AboutQuestionsAnswers,
})











