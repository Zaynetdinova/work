import {topHeader} from './view/topHeader'
import {bottomHeader} from './view/bottomHeader/bottomHeader'
import {sidebarWrapper} from "./view/sidebar/sidebarWrapper";



export function createHeader(data) {
  return `
        ${topHeader()}
        <hr class="line-header">
        ${bottomHeader()}
        ${sidebarWrapper()}
       `
}




