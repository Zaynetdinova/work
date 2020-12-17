import '../styles/style.scss'
import 'swiper/swiper-bundle.css';
import {Router} from './core/routes/Router'
import {MainPage} from './pages/MainPage'
import {ViewCategoriesPage} from './pages/ViewCategoriesPage'
import {CatalogPage} from './pages/CatalogPage'
import {ViewCategoriesChildren} from './pages/ViewCategoriesChildren'

window.userRegistry = true

new Router('#app', {
  mainPage: MainPage,
  viewCategoriesPage: ViewCategoriesPage,
  viewCategoriesIndex: CatalogPage,
  viewCategoriesChildren: ViewCategoriesChildren,
})









