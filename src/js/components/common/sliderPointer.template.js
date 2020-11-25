export function sliderPointerTemplate(className = '') {
    return `
        <div class='slider-pointer ${className}'>
            <div class='left'></div> 
            <div class="ellipse-wrapper">
                <span class='ellipse_main'></span>
                <span class='ellipse'></span>
                <span class='ellipse'></span>
                <span class='ellipse'></span>
            </div>
            <div class='right'></div>
        </div>
    `
}
