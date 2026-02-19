const productBox = document.getElementById("product-box");
const cartContainer = document.getElementById("cart-container");
const fetcApi = async ()=>{
const res = await fetch("https://fakestoreapi.com/products")
const data = await res.json();
displayProduct(data)
}
const displayProduct = (products)=>{
    products.map((product)=>{
        const div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top object-fit-cover h-25" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.category}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`;
            productBox.appendChild(div);
    })
}
const addToCart = ()=>{
    
}
fetcApi();