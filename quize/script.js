
 
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const button_input = document.getElementById("signin-button");

//dummy user
const currentUser = {
    email: "admin@gmail.com",
    password: "admin@123"
};
const singTnUser = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const email = email_input.value;
    const password = password_input.value;

    if (emailPattern.test(email ) && strongPasswordRegex.test(password)) {
        if (email === currentUser.email && password === currentUser.password
        ) {
            alert("successful");
        } else {
            alert("invalid");
        }
    }
    else {
        alert("invalid credential");
    }

};
button_input.addEventListener("click", singTnUser);




// const question = document.getElementById("question");
// const option1 = document.getElementById("option1");
// const option2 = document.getElementById("option2");
// const option3 = document.getElementById("option3");
// const option4 = document.getElementById("option4");
// const next_btn = document.getElementById("next-btn");

// let timerLeft = 5;
// let TimerSecond;
// function startimer(){
//     timerLeft = 5;
//     TimerSecond = setInterval(()=>{
//     document.getElementById("second-h1").textContent = timerLeft;
//     timerLeft--;
//     if(timerLeft<0){
//         clearInterval(TimerSecond);
//         gotoNextQuestion();
//     }
// },1000);
// }

// // abb mujhe 10 question kaa object uthana h 
// const quizData = [
//     {
//         question: "1. Which HTML tag is used to link a JavaScript file?",
//         options: ["<javascript>", "<script>", "<js>", "<link>"],
//         answer: "<script>"
//     },
//     {
//         question: "2. Which method is used to print output in the console?",
//         options: ["print()", "console.log()", "log.console()", "write()"],
//         answer: "console.log()"
//     },
//     {
//         question: "3. Which keyword declares a block-scoped variable?",
//         options: ["var", "let", "const", "static"],
//         answer: "let"
//     },
//     {
//         question: "4. What is the correct way to write a comment in JavaScript?",
//         options: ["<!-- comment -->", "// comment", "# comment", "* comment *"],
//         answer: "// comment"
//     },
//     {
//         question: "5. Which function converts a string to an integer?",
//         options: ["Number()", "int()", "parseInt()", "stringToNumber()"],
//         answer: "parseInt()"
//     },
//     {
//         question: "6. Which operator is used for strict equality?",
//         options: ["=", "==", "===", "!="],
//         answer: "==="
//     },
//     {
//         question: "7. What is the default value of an uninitialized variable in JS?",
//         options: ["null", "0", "undefined", "false"],
//         answer: "undefined"
//     },
//     {
//         question: "8. Which array method removes the last element?",
//         options: ["shift()", "unshift()", "pop()", "push()"],
//         answer: "pop()"
//     },
//     {
//         question: "9. Which loop runs at least one time even if condition is false?",
//         options: ["for", "while", "do...while", "foreach"],
//         answer: "do...while"
//     },
//     {
//         question: "10. Which keyword is used to create a function?",
//         options: ["func", "function", "method", "create"],
//         answer: "function"
//     }
// ];

// // abb iss object call krna h with functions 
//  let index = 0;
//  function loadQuestion(){
//     const q = quizData[index];

//     question.textContent = q.question;
//     option1.textContent = q.options[0];
//     option2.textContent = q.options[1];
//     option3.textContent = q.options[2];
//     option4.textContent = q.options[3];

//     // abb muje lst pe aajata huu usse mujhe submit krna h toh mujhe submit button bnaa hogaa 
//     if(index === quizData.length-1){
//         next_btn.textContent = "Submit";
//     }else{
//         next_btn.textContent = "Next";
//     }
//  }
// //  loadQuestion();
//  // abb mujhe jese hii 60 second complete hote h toh mujhe use next question pe jump krwana h usse 
//  function gotoNextQuestion(){
//     index++;
//     if(index<quizData.length){
//         loadQuestion();
//         clearInterval(TimerSecond);
//         startimer();
//     }else{
//         alert("Quiz Finished Submiting...");
//     }
//  };
 
//  // abb mujhe button ko fix krnaa h 
//  next_btn.addEventListener("click",gotoNextQuestion);
//  loadQuestion();
//  startimer();