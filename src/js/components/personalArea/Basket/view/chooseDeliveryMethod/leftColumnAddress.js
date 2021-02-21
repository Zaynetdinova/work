import place from '../../../../../../images/icons/place.svg'

export function leftColumnAddress() {
    return `
    <div data-content-js class="left-column-address">
        <section data-open-section-js>
            <div class="title-img">
                <div class="img-wrapper">
                    <img src="${place}" alt="">
                    <div>Выберите адрес доставки</div>
                </div>
                <div class="arrow"></div>
            </div>
        </section>                 
        
        <section class="content">
            <div class="wrap-close-text">
               <div class="img-close-icon"></div>
                <span>105187, г. Москва, ул. Окружной проезд, 30А</span>
            </div>
            <div class="button-add">Добавить новый адрес</div>
        </section>
    </div>
    `
}
