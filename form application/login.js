

// declare and innitialize the variablels email and password
let email='namutebijoan@gmail.com';
let password='22/u/6626@2024';
// THIS DECLARATION BRINGS THE MESSAGE BOX WHERE WE FILL OUR CRENDENTIALS FOR VALIDATION

let userEmail=prompt("enter your email");
let userPassword=prompt("enter your password");
// function to validate the email and password using the parameters
function loginCrendentials(inputEmail, inputPassword){
    if(inputEmail===email && inputPassword===password){
        console.log(`your userEmail is ${email}. login sucessfully`);


    }

    else{
       console.log(`your userEmail is . invalid login`); 
    }
}
// 
loginCrendentials(userEmail,userPassword);
