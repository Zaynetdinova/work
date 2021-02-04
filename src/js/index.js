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
import {BonusesPage} from "./pages/PersonalAreaPage/BonusesPage";

import {AboutShopping} from './pages/informationPage/AboutShopping';
import {AboutPayment} from "./pages/informationPage/AboutPayment";
import {AboutQuestionsAnswers} from "./pages/informationPage/AboutQuestionsAnswers";
import {AboutCooperation} from "./pages/informationPage/AboutCooperation";
import {AboutSize} from "./pages/informationPage/AboutSize";
import {AboutReturn} from "./pages/informationPage/AboutReturn";
import {AboutContacts} from "./pages/informationPage/AboutContacts";
import {AboutUs} from "./pages/informationPage/AboutUs";
import {AboutWorkingCondition} from "./pages/informationPage/AboutWorkingCondition";



window.userRegistry = true

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
  aboutCooperation: AboutCooperation,
  aboutSize: AboutSize,
  aboutReturn: AboutReturn,
  aboutContacts: AboutContacts,
  aboutUs: AboutUs,
  aboutWorkingCondition: AboutWorkingCondition,
})











