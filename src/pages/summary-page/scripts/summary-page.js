/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/summary-page.scss'
import { fetchData } from "../../../global-scripts/scripts/fetchData.js"
import { buildProductList } from './buildProductList'
import { buildSummarySection } from './buildSummarySection'


const API_PRODUCT_LINK = '/json/products.json'

const bindButtons = () => {
    const confirmButton = document.querySelector('#confirmButton')
    confirmButton.addEventListener('click',(e)=>{
        e.target.classList.add('loading')
    })

    const cancelButton = document.querySelector('#cancelButton')
    cancelButton.addEventListener('click',(e)=>{
        confirmButton.classList.remove('loading')
    })
}


const initSummaryPage = async () => {
    const {products, summary} = await fetchData(API_PRODUCT_LINK)
    //simulate fetch delay
    setTimeout(()=>{
        buildProductList(products)
    },1000)
    setTimeout(()=>{
        buildSummarySection(summary)
    },1500)

    bindButtons()
}

initSummaryPage()
