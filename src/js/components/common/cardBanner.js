export function cardBanner(text, position = '') {
  return `
    <div class='Card-banner banner-${position}'>
        ${text}
    </div>
  `
}
