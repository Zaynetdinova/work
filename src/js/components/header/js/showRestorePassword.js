export function showRestorePassword(type='') {
    const showRestorePassword = document.querySelector('#restore')
    showRestorePassword.classList.add('show-entry')
    if (type === 'close') {
        showRestorePassword.classList.remove('show-entry')
    }
}