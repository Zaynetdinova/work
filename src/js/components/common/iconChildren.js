import img1 from '../../../images/icons/baby.svg'
import img2 from '../../../images/icons/girl.svg'

export function IconChildren() {
    return `
        <div class="Icon-children">
            <div class="title-icon">
                <div class="wrap">
                <a class='link-children'>
                    <img class="img" src=${img1} alt="">
                    <div class='wrap-span'>
                        <span class="item">Новорожденным</span>
                        <span class="month">(12 мес. - 17 лет)</span>
                    </div>
                </a>
                <hr class="hr-children-2">
                </div>
                <div class="wrap">
                <a class='link-children'>
                    <img class="img" src=${img2} alt="">
                    <div class='wrap-span'>
                        <span class="item">Девочкам</span>
                        <span class="month">(12 мес. - 17 лет)</span>
                    </div>
                </a>
                <hr class="hr-children">
                </div>
            </div>
            <div class="content-icon">
           
            </div>
        </div>
    `
}