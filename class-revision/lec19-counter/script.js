//{  =============AI===================================
const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX - 100 + "px";
    blur.style.top = e.clientY - 100 + "px";
});document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        cursor.style.background = "yellow";
    });

    btn.addEventListener("mouseleave", () => {
        cursor.style.background = "#00ffcc";
    });
});
//========================AI========================  }



const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const buttonReset = document.getElementById("button-reset")
const buttonInto = document.getElementById("button-into")
const Count = document.getElementById("count")
const module = document.getElementById("button-module")




button1.addEventListener("click", ()=>{
    Count.textContent++;
})
button2.addEventListener("click", ()=>{
    Count.textContent--;
})
buttonReset.addEventListener("click", ()=>{
    Count.textContent= 0;
})
buttonInto.addEventListener("click", ()=>{
    Count.textContent *= 2;
})
module.addEventListener("click", ()=>{
    Count.textContent %=2;
})  