import '../styles/style.scss'
import {OptMoyo} from './components/OptMoyo/OptMoyo'
import {Header} from './components/header/Header'
import {Main} from './components/main/Main'
import {PopularBrand} from './components/popularBrand/PopularBrand'
import {SharesBlock} from './components/sharesBlock/sharesBlock'
import {Bestsellers} from './components/bestsellers/Bestsellers'
import {Footer} from './components/footer/Footer'
import 'swiper/swiper-bundle.css';

const app = new OptMoyo('#app', {
  components: [
    Header,
    Main,
    PopularBrand,
    SharesBlock,
    Bestsellers,
    Footer
  ]
})

window.userRegistry = true
app.render()

Main.slider






// test (потом переделать)
const inputSearch = document.querySelector('.input-header')

document.body.addEventListener('click', (e) => {
  let input = e.target.closest('article');
  if (!input) {
    inputSearch.classList.remove('input-header-active')
  };

})

inputSearch.addEventListener('click', () => {
  if(inputSearch.dataset.id === 'input-search-js') {
    const inputSearch = document.querySelector('.input-header')
    inputSearch.classList.add('input-header-active')
  }
})


