export function showRegister(type='') {
    const showRestorePassword = document.querySelector('#entry')
    showRestorePassword.classList.remove('show-entry')
    showRestorePassword.classList.add('show-register')
    if (type === 'close') {
        showRestorePassword.classList.remove('show-entry')
    }
}

export function showRegister2(type='') {
    const showRestorePassword = document.querySelector('#enter-button-js')
    showRestorePassword.classList.remove('show-entry')
    showRestorePassword.classList.add('show-register')
    if (type === 'close') {
        showRestorePassword.classList.remove('show-entry')
    }
}