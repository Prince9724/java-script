const firstNumber = document.getElementById("first-input");//jaha pr user apni first value ko input krega. 
const secondNumber = document.getElementById("second-input");//jaha pr user apni secod value ko input krega.
const addButton = document.getElementById("add-btn");//aad-btn ko html ke ander se get kiya hai. aur addButton variable ke ander store kiya hai.  
const swapButton = document.getElementById("swap-btn");//swap-btn ko  get kiya hai. aur swapbutton  variable ke ander store kiy hai. 
const clearButton = document.getElementById("clear-btn");//clear-btn ko html se get kiya aur usko clearButton ke ander store kiya hai. 

const first = document.getElementById("first");//first ko get kiya aur first naam ke variable ke ander store kiya. 
const second = document.getElementById("second");//

const firstvalue =  localStorage.getItem("firstvalue");//jis value maine localstorage me set kiya tha usko
const secondvalue =localStorage.getItem("secondvalue");//  mai 
// get krke ek global variable me store kr rha hu 

firstNumber.value = firstvalue;//jis global variable me first number ko localstorage se  get kiya hai usko mai yaha first number ko assin kr rha hu.
secondNumber.value = secondvalue;//secondnumber ki value me ham second value ko assign kr rhe hai air second value localstorage se get ki hai .
//ye ham isliye kiye hai jisase ham jo value ko user se input lenmge usko refresh krne pr vo value dsiplay se remove nahi hogi !!
first.textContent = firstvalue;
second.textContent =secondvalue;
//jaha user input display ho rha hai vaha se bhi remove na ho isliye local stirage se get kiye gye value ko vaha pr store kr rhe hai.
// taki refres hone pr bhi vo value display pr hi rhe remove na ho. 

addButton.addEventListener("click",()=>{
    first.textContent = firstNumber.value;//ham textcontent ki help se first name ki variable ke ander first number ki value ko html me exchange kiya.                 
    second.textContent = secondNumber.value;

    localStorage.setItem("firstvalue",firstNumber.value);//first input me di gyi value ko localstorage me set kiya hai.  
    localStorage.setItem("secondvalue",secondNumber.value);//second input me di gyi value ko localstorage me set kiya hai .
})

swapButton.addEventListener("click",()=>{
    first.textContent = secondNumber.value;//swap krne ke liye value ko exchange kiya hai.
    second.textContent = firstNumber.value;
     
    firstNumber.value = first.textContent;//swaping ko continue rkhne ke liye vapas se value ko exchange kiya hai.
    secondNumber.value = second.textContent;
})

clearButton.addEventListener("click",()=>{//clear button pr click krne pr 
   const clearfirst =  localStorage.removeItem("firstvalue");//local storage se value ko delet kr rhe hai hai.
   const clearsecond =   localStorage.removeItem("secondvalue");//  aur is process ko ek variable ke ander store kr rhe hai.
   //  jisko ham aage use kr rhe hai
    
    //her value yha se delet ho rha hai. 
firstNumber.value = clearfirst;
secondNumber.value = clearsecond;

first.textContent = clearfirst;
second.textContent =clearsecond;
})