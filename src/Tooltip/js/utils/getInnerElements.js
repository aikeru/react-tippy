import { Selectors } from '../core/globals'

/**
* Returns inner elements of the popper element
* @param {Element} popper
* @return {Object}
*/
export default function getInnerElements(popper) {
  if(!popper) {
    console.error('No popper element')
    return { tooltip: undefined, circle: undefined, content: undefined }
  }
  return {
    tooltip: popper.querySelector(Selectors.TOOLTIP),
    circle: popper.querySelector(Selectors.CIRCLE),
    content: popper.querySelector(Selectors.CONTENT)
  }
}
