export function showBackCall(type='') {
    const showBackCall = document.querySelector('#backCall')
    const closeBtn = document.querySelector('#closeImg-backCall')
    showBackCall.classList.add('show-callBack')
    if (type === 'close') {
        closeBtn.classList.remove('show-callBack')
    }

}