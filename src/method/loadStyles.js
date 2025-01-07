import {IPE_DEFAULT_CSS, SSI_MODAL_CSS} from "../libs/styles.js";


// 放在越上面优先级越高
const styleList = [
  // Default Skin
  IPE_DEFAULT_CSS,
  // ssi-modal Style
  SSI_MODAL_CSS,
  // FontAwesome
  'https://fastly.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
]

export function loadStyles(noCache = false) {
  styleList.forEach((href) => {
    if (href.startsWith("http")) {
      if (noCache) {
        const url = new URL(href)
        url.searchParams.set(Date.now(), 'no_cache')
        href = '' + url
      }
      $('head').prepend(
          $('<link>', {href, rel: 'stylesheet', 'data-ipe': 'style'})
      )
    } else {
      const stylesheet = document.createElement('style')
      stylesheet.type = 'text/css'
      stylesheet.appendChild(document.createTextNode(href))
      document.head.appendChild(stylesheet)
    }
  })
}
