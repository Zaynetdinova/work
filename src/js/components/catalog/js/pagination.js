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
            <span>1</span>
            <span>...</span>
            <span>3 4 5</span>
            <span>...</span>
            <span>315</span>
        </div>
    `
}