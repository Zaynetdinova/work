import '../styles/style.scss'
import 'swiper/swiper-bundle.css';
import {Router} from './core/routes/Router'
import {MainPage} from './pages/MainPage'
import {ViewCategoriesPage} from './pages/ViewCategoriesPage'
import {CatalogPage} from './pages/CatalogPage'
import {ViewCategoriesChildren} from './pages/ViewCategoriesChildren'
import {CardProduct} from './pages/CardProduct'
import 'nouislider/distribute/nouislider.css';
import {Popup} from "./pages/Popup";




window.userRegistry = true

new Router('#app', {
  mainPage: MainPage,
  viewCategoriesPage: ViewCategoriesPage,
  viewCategoriesIndex: CatalogPage,
  viewCategoriesChildren: ViewCategoriesChildren,
  cardProduct: CardProduct,
  popup: Popup,
})











