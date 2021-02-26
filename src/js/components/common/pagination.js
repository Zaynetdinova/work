export function pagination(prev, prevLink, next, nextLink, id) {
    return `
        <div class="pagination">
            <div class="wrapper-button-pagination">
                <a href="${prevLink}" data-parent-js id="pagination-prev-js" class="prev">
                    <div class="arrow-prev"></div>
                    <div class="text">${prev}</div>
                </a>
                <a href="${nextLink}" data-parent-js id="pagination-next-js" class="next">               
                    <div class="text">${next}</div>
                    <div class="arrow-next"></div>
                </a>
            </div>          
        </div>
    `
}
