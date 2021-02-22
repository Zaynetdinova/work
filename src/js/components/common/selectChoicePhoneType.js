import arrow from '../../../images/icons/arrow3.svg'
import {popupPhone} from './entry/view/popupPhone'

export function selectChoicePhoneType(data, text) {
  return `
    <div class="wrapper-select wrapper-select-input">
    
   		<div class="input-selected-item">
				
				<input name="phone" class="input-name test-mask" placeholder="Телефон*">
				
				<article data-type="input" class="arrow-wrapper">
					<img class="arrow" src="${arrow}" alt="">      
					<span data-type="value" class="value">
						<img src="${text}">
					</span>
				</article> 
			</div>
			
			<div class="popup-selected-items">  
					${popupPhone(data)}
				</div>        
		</div> 
  `
}
