export function checkboxRegistration(text) {
    return `
        <form class="form-js">
            <div class="wrap-checkbox">
                <input required checked class="checkbox checkbox-filter-js" type="checkbox" id="forMe"> 
                <label for="forMe">
                    <div class="text-checkbox">
                        ${text}
                    </div>
                </label>
            </div> 
        </form>
    `
}