export function showBackCallFooter(type='') {
    const showBackCall = document.querySelector('#backCallFooter')
    showBackCall.classList.add('show-callBack')
    if (type === 'close') {
        showBackCall.classList.remove('show-callBack')
    }
}