import { summaryTemplate } from "./summaryTemplate"

const WRAPPER_SELECTOR = '.summary-prices'

export const buildSummarySection = (summary) => {
    const wrapper = document.querySelector(WRAPPER_SELECTOR)
    wrapper.innerHTML = summaryTemplate(summary)
}