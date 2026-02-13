// const fruits = [{ name: "apple", img: "🍎" }, { name: "mango", img: "🥭" }, { name: "pineapple", img: "🍍" }];
// const fruitsBox = document.querySelector(".fruits-box");//fruitbox ke ander maine quesryselector ka use krke html me 
// // se maine fruit-box name ke class ke ander se saare element ko get kya hai 
// const child = fruitsBox.children; //child name ke variable ke ander maine fruit=box ke child ko store kiya hai 

// for (let i = 0; i < child.length; i++) {//ye looop 0 se start hoke child ki length se -1 tk tak chlegi 
//     child[i].children[0].textContent = fruits[i].name;// her chil ki index me do children hai aur 
//     // ahm yha fixed value assign kr rhe hai 
//     //to hme index na likh kr ke inki position likhni pdegi aur ye har child pr same work hi rhega  
//     child[i].children[1].textContent = fruits[i].img;
// }

//== ab hme html me keval fruits-box ki help se puracode jasvascript se krna hai ==
// ========================================================================================
const fruits = [{ name: "apple", img: "🍎" }, { name: "mango", img: "🥭" }, { name: "pineapple", img: "🍍" }];
const fruitsBox = document.querySelector(".fruits-box");//fruitbox ke ander maine quesryselector ka use krke html me 
fruits.forEach(fruit => {
    const div = document.createElement("div");//maine ek div creat kiya hai html ke ander 
    const span1 = document.createElement("span");//span1 div ke ander ye dono span create kiya hai 
    const span2 = document.createElement("span");
    
    span1.textContent = fruit.name;//ab span1 me textcontent kiya hai fruite ke ander name naam ki key 
    div.appendChild(span1)// aur usko div me appnend kr diya ;
    span2.textContent = fruit.img;
    div.appendChild(span2)
    fruitsBox.appendChild(div);

})

