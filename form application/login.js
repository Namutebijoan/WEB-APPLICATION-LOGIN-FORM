


let email='namutebijoan@gmail.com';
let password='22/u/6626@2024';

let userEmail=prompt("enter your email");
let userPassword=prompt("enter your password");

function loginCrendentials(inputEmail, inputPassword){
    if(inputEmail===email && inputPassword===password){
        console.log(`your userEmail is ${email}. login sucessfully`);


    }

    else{
       console.log(`your userEmail is . invalid login`); 
    }
}

loginCrendentials(userEmail,userPassword);