

const container = document.getElementById("container");
const cartlist = JSON.parse(localStorage.getItem("cart")) || [];//agar json.parse ki infomation nahi milti hai to ham khali array usko bhej denge. string ko array me convoirt krne ke liye json.parse ka use kr rhe hai .!! 
const cartContainer = document.getElementById("cart-container");

const displayProduct = (products) => {
    products.forEach((product) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src= ${product.images[0]}
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${product.title}</h5>
                        <p class="card-text"> ${product.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price -  ${product.price}-/</li>
                        <li class="list-group-item"> discount -${product.discountPercentage}%</li>
                        <li class="list-group-item">Brand - ${product.brand}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">veiw</a>
                        <button  onclick='addToCArt(${JSON.stringify(product)})' class="btn btn-success ms-3"> Add to cart </button>
                        
                    </div>
                </div>`;
        /*JSON.stringify(product)=> javascript object ko string me badlna kyuki browser html me keval string hi smjhta hai */
        container.appendChild(div);
    });
}
const cartDisplay = () => {
    cartDisplay.innerHTML="";
    cartlist.forEach((cart) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${cart.images[0]}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"> ${cart.title}</h5>
                                    
                                    <p class="card-text"> Price- ${cart.price + (cart.price * cart.discountPercentage / 100)}</small></p>
                                    <p class="card-text"> Discountprice - ${cart.price}-/ dis -${cart.discountPercentage}%</p>
                                    </div>
                                     <button class="btn btn-danger">Remove</button>
                                     <span>
                                        <button class="btn btn-success">-</button>
                                             <span>1</span>
                                          <button class="btn btn-success">+</button>
                                     </span>
                            </div>
                        </div>
                    </div>`;
        cartContainer.appendChild(div);

    })
}
const addToCArt = (product) => {   //add to cart ke liye addtocart nam ka ek function bnaaya hai.
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    cartlist.push(product);//yha product array me hai.  
    localStorage.setItem("cart", JSON.stringify(cartlist));
    alert("succesfull add to cart !");
    // cartDisplay();
}

const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then((data) => displayProduct(data.products))

}

fetchProduct();
cartDisplay();