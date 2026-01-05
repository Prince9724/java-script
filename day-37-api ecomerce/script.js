// {
// <div class="card" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of
//                         the card’s content.</p>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">An item</li>
//                     <li class="list-group-item">A second item</li>
//                     <li class="list-group-item">A third item</li>
//                 </ul>
//                 <div class="card-body">
//                     <button class="btn btn-primary">view more </button>
//                     <button class="btn btn-success"> Add to chart </button>
//                 </div>
//             </div>
// }


let cart = []; //ek hmne global array bnya jo khali h 
const addToCart = (product) => {
    let cart = localStorage.getItem("cart");
    if (cart === null) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    // console.log(cart);
    cart.push({
        productimg: product.thumbnail,
        id: product.id,
        title: product.title,
        price: product.price,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
}

const container = document.getElementById("container");
const displayProduct = (products) => {
    products.forEach((product) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${product.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${product.title}</h5>
                        <p class="card-text"> ${product.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Price  ${product.price}</li>
                        <li class="list-group-item"></li>
                        <li class="list-group-item"><span>Discount  -${product.discountPercentage}%</span><span> | ${product.rating} ⭐ <span>rating</span></span></li>
                        <li class="list-group-item"> </li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-primary">view more </button>
                        <button onclick="${addToCart(product)}" class="btn btn-success"> Add to chart </button>
                    </div>
                </div>`;

        container.appendChild(div);
    });
}

const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => displayProduct(data.products))

}
fetchProduct();



// priyanshu