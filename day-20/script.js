    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const password = document.querySelector("#password");
    const button = document.querySelector("#btn");
    const info = document.querySelector(".info");

    const submitbutton = () => {
    const usernamevalue = username.value.toLowerCase();
    const emailvalue = email.value;
    const phonevalue = phone.value;
    const passwordvalue = password.value;


    let isvalidate = true;
    // let errormassage = "";
    if (usernamevalue === "" ||
        emailvalue === "" ||
        phonevalue === "" ||
        passwordvalue === ""
    ) {
        isvalidate = false;
        errormassage = "all feild are must be requared to fill";
    }
    else {
        isvalidate = emailvalue.includes("@");
        if (isvalidate) {
        isvalidate = false;

            let specialchar = [
                '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
                '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|',
                ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?',
                '`', '~'
            ];
           for(let i =0;i<passwordvalue.length;i++){
            for(let j=0;j<specialchar.length;j++){
                if(passwordvalue[i]===specialchar[j])
                {
                    isvalidate = true;
                }
                else{
                    errormassage = "a special character missing in your password!!"
                }
            }
           }
        }
        else {
            errormassage = "email is not valid";
        }
        if(isvalidate){
            isvalidate = false;
           let number = ["1","2","3","4","5","6","7","8","9"];
           for(let i = 0; passwordvalue.length;i++){
            for(let j = 0; number.length;j++){
                if(passwordvalue[i]===number[j]){
                    isvalidate = true;
                }
            }
           }            
        }
        else{
          errormassage= "fndhdh ";  
        }
    }
    if (isvalidate) {
        alert("succesfull !");
    }
    else {
        alert(errormassage);
    }
}


button.addEventListener("click", submitbutton);
