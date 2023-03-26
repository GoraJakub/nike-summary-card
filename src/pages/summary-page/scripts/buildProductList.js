import { productTemplate } from "./productTemplate"

const WRAPPER_SELECTOR = '#summary-page .summary-products'

export const buildProductList = (products) => {
    const html = products.map(product=>productTemplate(product)).join('')
    const wrapper = document.querySelector(WRAPPER_SELECTOR)
    wrapper.innerHTML = html
}