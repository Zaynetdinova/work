import '../styles/style.scss'
import 'swiper/swiper-bundle.css';
import 'nouislider/distribute/nouislider.css';
import {Router} from './core/routes/Router'
import {MainPage} from './pages/MainPage'
import {ViewCategoriesPage} from './pages/ViewCategoriesPage'
import {CatalogPage} from './pages/CatalogPage'
import {ViewCategoriesChildren} from './pages/ViewCategoriesChildren'
import {CardProduct} from './pages/CardProduct'
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
import {Chosen} from "./pages/PersonalAreaPage/Chosen";
import {OrderStatusPage} from "./pages/PersonalAreaPage/OrderStatusPage";
import {ViewOrderPage} from "./pages/PersonalAreaPage/ViewOrderPage";
import {OnlinePayPage} from "./pages/PersonalAreaPage/OnlinePayPage";
import {OrderDonePage} from "./pages/PersonalAreaPage/OrderDonePage";
import {PaymentOrderPage} from "./pages/PersonalAreaPage/PaymentPage";
import {DeliveryOrderPage} from "./pages/PersonalAreaPage/DeliveryPage";
import {$} from './core/dom'



window.userRegistry = true


const test = $('#main')
const size = $('#size')
if(test.$el) {
	console.log('super', test)
	const t = new MainPage()
	test.append(t.getRoot())
	t.afterRender()
}

if(size.$el) {
	console.log(size)
	const s = new AboutSize()
	size.append(s.getRoot())
	s.afterRender()
}




// new Router('#app', {
//   mainPage: MainPage,
//   viewCategoriesPage: ViewCategoriesPage,
//   viewCategoriesIndex: CatalogPage,
//   viewCategoriesChildren: ViewCategoriesChildren,
//   cardProduct: CardProduct,
//   personalAreaBasket: BasketPage,
//   personalAreaData: PersonalDataPage,
//   personalAreaBonusesPage: BonusesPage,
//   personalAreaChosen: Chosen,
//   personalAreaOrdersStatus: OrderStatusPage,
//   personalAreaViewOrder: ViewOrderPage,
//   personalAreaPaymentPage: PaymentOrderPage,
//   personalAreaDeliveryPage: DeliveryOrderPage,
//   onlineOrderPage: OnlinePayPage,
//   orderDonePage: OrderDonePage,
//   aboutShoppingPage: AboutShopping,
//   aboutPaymentPage: AboutPayment,
//   aboutQuestionAnswers: AboutQuestionsAnswers,
//   aboutCooperation: AboutCooperation,
//   aboutSize: AboutSize,
//   aboutReturn: AboutReturn,
//   aboutContacts: AboutContacts,
//   aboutUs: AboutUs,
//   aboutWorkingCondition: AboutWorkingCondition,
// })











