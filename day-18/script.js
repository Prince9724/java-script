const input = document.getElementById("input");
const button = document.getElementById("btn");
const col=document.getElementById("col");

button.addEventListener("click",() => {
// alert("BUTTON IS DANGER");
const value= input.value;
const p = document.createElement("p");
p.textContent=value;
 
col.appendChild(p);





}
)