import {mobileHeader} from './mobileHeader'
import {desktopHeader} from "./desktopHeader";

export function bottomHeader() {
    return `
        <div class='bottomHeader'>
          <section class="mobile-header">
            ${mobileHeader()}
          </section>
          <section class="desktop-header">
            ${desktopHeader()}
          </section>
        </div>
    `
}
