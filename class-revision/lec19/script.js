const input = document.getElementById("input");
const button = document.getElementById("button1");
button.addEventListener("click", () => {
    let value = input.value;
    if (value === "") {
        alert("please write a text !!")
    } else {
        alert(value);
        input.textContent=" ";

    }

})