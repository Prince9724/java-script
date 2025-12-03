// const body = document.getElementsByTagName("body");
const button = document.getElementById("btn");
const  randomColorGenerate=()=>{
 const  random =  Math.floor(Math.random()*16581375);
 const color = random.toString(16);
//  alert( color);
    button.style.color= "#"+ color;
    button.textContent= "#"+ color;
    document.body.style.backgroundColor = "#"+ color;
}

// 255 * 255 * 255 =  1,65,81,375
button.addEventListener("click",randomColorGenerate)