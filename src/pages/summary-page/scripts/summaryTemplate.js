export const summaryTemplate = (summary) =>{
    const html = 
    `<div class="summary-prices-sub  ">
    <div class="summary-prices-item">
      <span class="summary-prices--label">Product summary:</span>
       <strong class="summary-prices--value">${summary.products_price_formatted}</strong> 
    </div>
    <div class="summary-prices-item">
      <span class="summary-prices--label">Cost of delivery:</span>
      <strong class="summary-prices--value">${summary.delivery_costs_formatted}</strong>
    </div>
    </div>
    <div class="summary-total  ">
        <span class="summary-total--label">Total:</span>
        <strong class="summary-total--value">${summary.total_price_formatted}</strong> 
    </div>`
    return html
}