import '../styles/style.scss'
import {OptMoyo} from './components/OptMoyo/OptMoyo'
import {Header} from './components/header/Header'
import {Main} from './components/main/Main'
import {PopularBrand} from './components/popularBrand/PopularBrand'
import {SharesBlock} from './components/sharesBlock/sharesBlock'
import {Bestsellers} from './components/bestsellers/Bestsellers'
import {Footer} from './components/footer/Footer'
import 'swiper/swiper-bundle.css';
import {eventGlobal} from './core/eventGlobal'
import {MoyomodaBlock} from "./components/moyomodaBlock/MoyomodaBlock";
import {Router} from './core/routes/Router'
import {MainPage} from './pages/MainPage'
import {ViewCategoriesPage} from './pages/ViewCategoriesPage'

new Router('#app', {
  mainPage: MainPage,
  viewCategoriesPage: ViewCategoriesPage
})

// const app = new OptMoyo('#app', {
//   components: [
//     Header,
//     Main,
//     PopularBrand,
//     SharesBlock,
//     MoyomodaBlock,
//     Bestsellers,
//     Footer
//   ]
// })
//
// window.userRegistry = true
// app.render()
// eventGlobal()







