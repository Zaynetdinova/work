import '../styles/style.scss'
import 'swiper/swiper-bundle.css';
import {Router} from './core/routes/Router'
import {MainPage} from './pages/MainPage'
import {ViewCategoriesPage} from './pages/ViewCategoriesPage'

new Router('#app', {
  mainPage: MainPage,
  viewCategoriesPage: ViewCategoriesPage
})









