import search_img from '../../../../images/header/search.svg'
import women from '../../../../images/header/women.png'
export function mobileSearchResult() {
  return `
            <div class='Mobile-search' id="Mobile-search-js">
              <form class='s'>
                  <input class='search-mobail' type='text' placeholder='Я ищу...' alt='search'>     
                  <input class='search-black-mobail' type='image' src=${search_img} alt='search'>
              </form>
              <section class="">
                <div class='line'></div>
                <div class='card-search'>
                    <img src=${women} alt="women">
                    <div class='wrap'>
                        <div class='banner'>новинка</div>
                        <div class='text'>
                            <p>Vittoria Vicci</p>
                            <div class='description'>Наименование товара</div>
                        </div>
                    </div>
                </div>
              
                <a class="watch-all-result" href="#">СМОТРЕТЬ ВСЕ результаты поиска</a>
              </section>
            </div>
        `
}
