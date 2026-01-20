

const container = document.getElementById("container");
let cartlist = JSON.parse(localStorage.getItem("cart")) || [];//agar json.parse ki infomation nahi milti hai to ham khali array usko bhej denge. string ko array me convoirt krne ke liye json.parse ka use kr rhe hai .!! 
const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");
let qyt = 1;


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
                        <li class="list-group-item">Price -  ${product.price.toFixed(2)}-/</li>
                         <li class="list-group-item">Price -  ${product.stock}-/</li>
                        <li class="list-group-item"> discount -${product.discountPercentage}%</li>
                        <li class="list-group-item">Brand - ${product.brand}</li>
                    </ul>
                    <div class="card-body">
                        <button  class="btn btn-secondary">veiw</button>
                        <button  onclick='addToCArt(${JSON.stringify(product)})' class="btn btn-success ms-3"> Add to cart </button>
                        
                    </div>
                </div>`;
        /*JSON.stringify(product)=> javascript object ko string me badlna kyuki browser html me keval string hi smjhta hai */
        container.appendChild(div);
    });
}
const removeProduct = (i) => {//index mngaya hai buttun me se
    cartlist.splice(i, 1)//index se first item ko remove krna hai .
    localStorage.setItem("cart", JSON.stringify(cartlist));//aur jo remove kr rhe hai usko dubaara se local storage me bhej rhe hai. 
    cartDisplay();
}
//agar user add to cart me same product dubara add krta hai to usme product add nhi hona chahiye aur allert massage me show hona chahiye ki already product add in cart 
//  
const increment = (i) => {//i maine apne paass se id dsali hai 
    cartlist[i].qyt++;  //cartlist ke ander i index pr qyt add hai usme ++ hoga. 
    localStorage.setItem("cart", JSON.stringify(cartlist));
    cartDisplay();
}
const decrement = (i) => {
    if (cartlist[i].qyt <= 1) {
        cartlist.splice(i, 1)//index pr phle number ki value remove ho jaayegi.
    }
    else {
        cartlist[i].qyt--;
    }
    //cartlist ke ander i index pr qyt add hai usme ++ hoga. 
    localStorage.setItem("cart", JSON.stringify(cartlist));
    cartDisplay();
}
const cartDisplay = (   ) => {
    let total = 0;
    cartContainer.innerHTML = "";
    totalPrice.textContent = "";

    cartlist.forEach((cart, i) => {

        const div = document.createElement("div");
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${cart.images[0]}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"> ${cart.title}</h5>
                                    
                                    <p class="card-text"> Price- ${cart.price.toFixed(0) + (cart.price * cart.discountPercentage / 100).toFixed(2)}</small></p>
                                    <p class="card-text"> Discountprice - ${cart.price}-/ dis -${cart.discountPercentage}%</p>
                                    <p class="card-text"> instock - ${cart.stock} piec </p>
                                    </div>
                                     <div class="d-flex justify-content-around mb-1">
                                     <button onclick = "removeProduct(${i})" class="btn btn-danger">Remove</button>
                                     <div>
                                        <button onclick="decrement(${i})"class="btn btn-success">-</button>
                                             <span  class="mt-2">${cart.qyt}</span>
                                          <button onclick="increment(${i})" class="btn btn-success">+</button>
                                     </div>
                                     </div>
                            </div>
                        </div>
                    </div>`;
        total = cart.qyt * (total + cart.price - (cart.price * cart.discountPercentage / 100));
        cartContainer.appendChild(div);
        totalPrice.textContent = `total -price = ${total.toFixed(2)} -$`;
    })
}
const addToCArt = (product) => {
     
    const index = cartlist.findIndex(
        (item) => item.id === product.id
    );
    if (index !== -1) {
        // product already exists → quantity increase
        cartlist[index].qyt++;
        alert("Product already in cart, quantity increased");
    } else {
        // new product → add to cart
        product.qyt = 1;
        cartlist.push(product);
        alert("Product added to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cartlist));
    cartDisplay();
};





const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then((data) => displayProduct(data.products))

}

fetchProduct();
cartDisplay();
// if cart me koi same product add hota hai to vo caart pr nhi blki qyt me ++ ho jaana chahiye.
//

// const addToCArt = (product) => {
//     const index = cartlist.findIndex(
//         (item) => item.id === product.id
//     );
    

//       product.qyt = 1;   // MOST IMPORTANT
//         cartlist.push(product);//ye qyt ko product ke ander add krta hai push ka kaam hota hai ki value ko array ke ander add krta hai .

//     cartlist = cartlist.map((cart) => {//map ek loop hai jo array me se eek eek value leke cart ke under  pass krta hai 
//         //a=[1,2,3]
//         //b=[4,5]
//         //c=[a,b]
//         //c=[[1,2,3][4,5]]//but
//         //c=[...a,...b]then
//         // c=[1,2,3,4,5] sbhi value ko ek sath spread kr dega.bich ki boundary hta dega  
//         return { ...cart, qyt: 1 };//... is a one type of operator  iska name spread operator hai ye code ye cart ki boundry ko break kr deta hai.
//         //cart ke aage ... lgaane se quentity ki value hai vo value cart me add ho jayegi . aur cart cartlist hi hai to cart list me qyt ki value add ho jaayegi.

//     })
//     localStorage.setItem("cart", JSON.stringify(cartlist));//add to cart ke liye addtocart nam ka ek function bnaaya hai.
//     const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
//     // cartlist.push(product);//yha product array me hai.  
//     // localStorage.setItem("cart", JSON.stringify(cartlist));//local storage me set krne ke liye fir se isko string me convert kiya 

//     alert("succesfull add to cart !");

// }