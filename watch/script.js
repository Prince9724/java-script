const text = document.getElementById("text");
 let date = new Date(); //new date is give random date .
setInterval(()=>{
    date = new Date();
    text.textContent= 
    date.getHours() + " : "+ date.getMinutes() + " : " +date.getSeconds()

},1000);