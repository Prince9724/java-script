const refresh  = document.getElementById("refresh-btn");
const image = document.getElementById("dog-img")

const fetchDog=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=> res.json())
    .then((data )=> {
        console.log(data);
        image.src = data.message;
    });
}
refresh.addEventListener("click", ()=>{
fetchDog();

})
fetchDog();