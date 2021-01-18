export function showBackCall(type='') {
    const showBackCall = document.querySelector('#backCall')
    showBackCall.classList.add('show-callBack')
    if (type === 'close') {
        showBackCall.classList.remove('show-callBack')
    }
}