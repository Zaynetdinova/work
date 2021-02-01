export function pagination(prev, next) {
    return `
        <div class="pagination">
            <div class="wrapper-button-pagination">
                <div data-parent-js id="pagination-prev-js" class="prev">
                    <div class="arrow-prev"></div>
                    <div class="text">${prev}</div>
                </div>
                <div data-parent-js id="pagination-next-js" class="next">               
                    <div class="text">${next}</div>
                    <div class="arrow-next"></div>
                </div>
            </div>          
        </div>
    `
}


export function number() {
    return `
        <article id="number-pages-js" class="number">
            <div class="wrap-button">
                <div class="button-prev"><div class="arrow-prev"></div></div>
            </div>
            <ul>
                <li><span class="page-number-js" id="1">1</span></li>
                <li><span>...</span></li>
                <li><span class="page-number-js" id="3">3</span></li>
                <li><span class="page-number-js active-number" id="4">4</span></li>
                <li><span class="page-number-js" id="4">5</span></li>
                <li><span>...</span></li>
                <li><span class="page-number-js" id="315">315</span></li>
            </ul>
            <div class="wrap-button">
                <div class="button-next"><div class="arrow-next"></div></div>
            </div>
        </article>
    `
}