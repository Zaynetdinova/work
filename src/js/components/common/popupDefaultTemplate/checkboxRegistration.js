export function checkboxRegistration(text) {
    return `
      <div class="wrap-checkbox">
          <input  checked class="checkbox checkbox-filter-js" type="checkbox" id="forMe"> 
          <label for="forMe">
              <div class="text-checkbox">
                  ${text}
              </div>
          </label>
      </div> 
    `
}