export const productTemplate = (product) =>{
    const html = 
    `<div class="summary-products-item">
        <div class="product-icon">
            <img src="${product.icon}" alt="${product.name}" class="product-icon--img"/>
        </div>
        <div class="product-details">
            <a class="product-name" href="#">${product.name}</a>
            <span class="product-category">${product.category}</span>
            <span class="product-size">Size: ${product.size}</span>
            <strong class="product-price">${product.price_gross_formatted}</strong>
          </div>
    </div>`
    return html
}