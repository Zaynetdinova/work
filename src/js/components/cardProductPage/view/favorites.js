import like from '../../../../images/icons/iconLike.svg'

export function favorites() {
    return `
        <div class="favoritesProduct">
            <div class="text">В избранное</div>
            <img src="${like}" alt="like">
        </div>            
    `
}
