export function pagination(prev, next, id) {
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
