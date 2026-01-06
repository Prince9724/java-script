// const cartContainer = document.getElementById("cart-container");
// const cartlist = JSON.parse(localStorage.getItem("cart")) || [];
// const cartDisplay=()=>{
//     cartlist.forEach((cart)=>{
//         localStorage.setItem("cart",JSON.stringify(cartlist));
//         const div = document.createElement("div");
//         div.innerHTML =`<div class="card mb-3" style="max-width: 540px;">
//                         <div class="row g-0">
//                             <div class="col-md-4">
//                                 <img src="${cart.images[0]}" class="img-fluid rounded-start" alt="...">
//                             </div>
//                             <div class="col-md-8">
//                                 <div class="card-body">
//                                     <h5 class="card-title"> ${cart.title}</h5>
//                                     <p class="card-text">price - ${cart.price}-/ dis -${cart.discountPercentage}%</p>
//                                     <p class="card-text"> ${cart.brand}</small></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;
//                     cartContainer.appendChild(div);

//     })
//  }
// const fetchCart = ()=>{
//     fetch("https://dummyjson.com/products")
//     .then(res=>res.json)
//     .then((cart)=>{
//         cartDisplay();
//     })
//  }