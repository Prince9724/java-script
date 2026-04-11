const time = document.getElementById("time")
const day  = document.getElementById("date");
setInterval(() => {
    const date = new Date();
    const month = date.getMonth()+1;
    // console.log(month)
    day.textContent = date.getDate()+" /"+month +"/"+date.getFullYear();     
    time.textContent = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}, 1000);