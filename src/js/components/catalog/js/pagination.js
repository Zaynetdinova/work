export function pagination() {
    return `
        <div class="pagination">
            <div class="wrapper-button-pagination">
                <div class="prev">
                    <div class="arrow-prev"></div>
                    <div class="text">Предыдущая страница</div>
                </div>
                <div class="next">               
                    <div class="text">Следующая страница</div>
                    <div class="arrow-next"></div>
                </div>
            </div>          
        </div>
    `
}


export function number() {
    return `
        <div class="number">
            <div class="wrap-button">
                <button class="button-prev"><div class="arrow-prev"></div></button>
            </div>
            <ul>
                <li><span>1</span></li>
                <li><span>...</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><span>5</span></li>
                <li><span>...</span></li>
                <li><span>315</span></li>
            </ul>
            <div class="wrap-button">
                <button class="button-next"><div class="arrow-next"></div></button>
            </div>
        </div>
    `
}