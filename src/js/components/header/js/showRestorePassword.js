export function showRestorePassword(type='') {
    const showRestorePassword = document.querySelector('#entry')
    showRestorePassword.classList.remove('show-entry')
    showRestorePassword.classList.add('show-restore')
    if (type === 'close') {
        showRestorePassword.classList.remove('show-entry')
    }
}

export function showRestorePassword2(type='') {
    const showRestorePassword = document.querySelector('#enter-button-js')
    showRestorePassword.classList.remove('show-entry')
    showRestorePassword.classList.add('show-restore')
    if (type === 'close') {
        showRestorePassword.classList.remove('show-entry')
    }
}