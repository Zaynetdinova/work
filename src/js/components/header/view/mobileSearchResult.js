import search_img from '../../../../images/header/search.svg'
import women from '../../../../images/bestsellers/1/img1.png'
export function mobileSearchResult() {
  return `
            <div class='Mobile-search' id="Mobile-search-js">
              <article class='input-wrapper' id="mobile-search-js">
                <input class='search-mobail' id="mobile-search-input-js" type='text' placeholder='Я ищу...' alt='search'> 
                <div class="delete" id="mobile-search-delete-js"></div>
                <div class='icon-search-mobail'> <div> 
              </article> 
              
              <section class="show-result" id="mobile-search-result">
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
