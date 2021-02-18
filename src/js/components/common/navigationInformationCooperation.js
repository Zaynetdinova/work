export function navigationInformationCooperation(thisClass = '') {
    return `
        <div class="Navigation">
           <a href="/#information/cooperation" class="${thisClass === 'suppliers' ? 'active' : ''} item"> поставщикам</a>
           <a href="/#information/working-condition" class="${thisClass === 'about-working-condition' ? 'active' : ''} item">условия работы</a>
	    </div>
    `
}