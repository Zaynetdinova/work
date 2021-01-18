export function showEntry(type='') {
    const showEntry = document.querySelector('#entry')
    showEntry.classList.add('show-entry')
    if (type === 'close') {
        showEntry.classList.remove('show-entry')
    }
}


export function showEntry2(type='') {
    const showEntry = document.querySelector('#enter-button-js')
    showEntry.classList.add('show-entry')
    if (type === 'close') {
        showEntry.classList.remove('show-entry')
    }
}