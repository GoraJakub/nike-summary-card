(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a=async(t,s={})=>{try{const r=await fetch(t,s);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){console.error(r)}},i=t=>`<div class="summary-products-item">
        <div class="product-icon">
            <img src="${t.icon}" alt="${t.name}" class="product-icon--img"/>
        </div>
        <div class="product-details">
            <a class="product-name" href="#">${t.name}</a>
            <span class="product-category">${t.category}</span>
            <span class="product-size">Size: ${t.size}</span>
            <strong class="product-price">${t.price_gross_formatted}</strong>
          </div>
    </div>`,l="#summary-page .summary-products",u=t=>{const s=t.map(c=>i(c)).join(""),r=document.querySelector(l);r.innerHTML=s},m=t=>`<div class="summary-prices-sub  ">
    <div class="summary-prices-item">
      <span class="summary-prices--label">Product summary:</span>
       <strong class="summary-prices--value">${t.products_price_formatted}</strong> 
    </div>
    <div class="summary-prices-item">
      <span class="summary-prices--label">Cost of delivery:</span>
      <strong class="summary-prices--value">${t.delivery_costs_formatted}</strong>
    </div>
    </div>
    <div class="summary-total  ">
        <span class="summary-total--label">Total:</span>
        <strong class="summary-total--value">${t.total_price_formatted}</strong> 
    </div>`,d=".summary-prices",p=t=>{const s=document.querySelector(d);s.innerHTML=m(t)},y="json/products.json",f=()=>{const t=document.querySelector("#confirmButton");t.addEventListener("click",r=>{r.target.classList.add("loading")}),document.querySelector("#cancelButton").addEventListener("click",r=>{t.classList.remove("loading")})},g=async()=>{const{products:t,summary:s}=await a(y);setTimeout(()=>{u(t)},1e3),setTimeout(()=>{p(s)},1500),f()};g();
