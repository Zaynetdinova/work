import arrow from '../../../images/icons/arrow3.svg'

export function selectOrganizationType(items, text) {
  console.log(text)
  return `
    <div class="wrapper-select">
    
   		<article data-type="input" class="input-selected-item">
				<section class="Com-disp-flex-al-center">
					 <div id="form-value-organization" data-type="value" class="title">
                ${text}
            </div>
				</section>
				<section class="arrow-wrapper">
						<img class="arrow" src="${arrow}" alt="">   
				</section>   
			</article>
			
			<div class="popup-selected-items">${items.join('')}</div>        
		</div> 
  `
}

