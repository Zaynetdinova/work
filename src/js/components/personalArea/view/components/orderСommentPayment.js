import comment from '../../../../../images/icons/comment.svg'
export function orderCommentPayment() {
    return `
        <div class="Order-comment">
            <div class="title">
                <img src="${comment}" alt="">
                Комментарий к заказу
            </div>
            <div class="wrap-comment">
                <textarea class="comment" placeholder="Ваш комментарий к заказу (не обязательно)"></textarea>
            </div>
        </div>
    `
}