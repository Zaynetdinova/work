export function navigationMobile(linkPrev,title,linkNext) {
    return `
        <div class="navigation-mobile">
            <a class="prev-info" href="${linkPrev}">
                <div class="arrow-prev"></div>
            </a>
            <div class="title">${title}</div>
            <a class="next-info" href="${linkNext}">
                <div class="arrow-next"></div>
            </a>
        </div>
    `
}