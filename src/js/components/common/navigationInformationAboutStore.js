export function navigationInformationAboutStore(thisClass = '') {
    return `
        <div class="Navigation">
           <a href="/#information/about-us" class="${thisClass === 'about-us' ? 'active' : ''} item">о нас</a>
           <a href="/#information/contacts" class="${thisClass === 'about-contacts' ? 'active' : ''} item">контакты</a>
	    </div>
    `
}