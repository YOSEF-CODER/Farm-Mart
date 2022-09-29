//Data storing into localstorage
function validateForm(){

    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    let formData ={
            "name":document.getElementById("uName").value,
            "email":document.getElementById("uEmail").value,
            "contactno":document.getElementById("uContactno").value,
            "password":document.getElementById("uPassword").value,
            "confirmpassword":document.getElementById("confirmPassword").value
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("details", JSON.stringify(data));
        } 
}
//Check if password is matching
function verifyPassword(input){
    if(input.value != document.getElementById("uPassword").value){
        input.setCustomValidity("Password Must be Matching");
    }else{
        input.setCustomValidity("");
    }
}


//check already registered users
function emailExist(value){
    let existemail = JSON.parse(localStorage.getItem("details"));


    
    let emailid = existemail.map((email,i,existemail) =>{
        return existemail[i].email;
    });



     let getexistemail = emailid.filter((email)=>{  // filter creates new array with all elements that pass the test implemented by the provided function
        if(email == value.value){
            value.setCustomValidity('email exist. try something else');
            
        }else{
            value.setCustomValidity("");
        }


    });
}



//Handling bubbling               //if the event not explicitly handeled its default action should not taken as as it normally would be
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        form.reset();
        document.getElementById("thankYou").style.display="block";
        form.style.display="none";
    });



    function showHide(show, hide){
        let showEle = document.getElementById(show);
        let hideEle = document.getElementById(hide);
        showEle.style.display="block";
        hideEle.style.display="none";
    }


    
// phone validation
function phoneValidation(){
    var uContactno = document.getElementById("uContactno").value;
    var mob = document.getElementById("mob");
    var text1 = document.getElementById("text1");

    let pattern = /^[0][9][0-9]{8}$/  ;

    if(uContactno.match(pattern)){
        
        text1.innerHTML = "valid phone number";
        text1.style.color = "green";
        }
        else{
        text1.innerHTML="please enter valid phone";
        text1.style.color="red";
        
        }

}
// password strength

var pass = document.getElementById("uPassword");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
        
        pass.addEventListener('input', () => {
            if(pass.value.length > 0){
                msg.style.display = "block";
            }
            else{
                msg.style.display = "none";
            }
            if(pass.value.length < 6){
                msg.style.color = "#ff5925";
            }
           else if(pass.value.length >= 6 ){
                str.innerHTML = "strong";
                msg.style.color = "green";
            }
          
        } )

// email validation

function emailValidation(){
var uEmail = document.getElementById("uEmail").value;
var text = document.getElementById("text");
var ema = document.getElementById("email");

let pattern = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

if(uEmail.match(pattern)){
    text.innerHTML="email is valid";
    text.style.color="green";
    }
    else{
    
    text.innerHTML="please enter valid email";
    text.style.color="red";
    }



}

function passwordCheck(){
     var pass = document.getElementById("uPassword");
     var confirm = document.getElementById("confirmPassword");
     var text2 = document.getElementById("text2");
 
     confirm.addEventListener("input",()=>{
        if(confirm.value == pass.value){
            text2.innerHTML="password matched";
            text2.style.color="green";
        }else{
                text2.innerHTML="password doesn't match";
                text2.style.color="red";
        }
    
    })

}
    //login here
    function loginUser(){
        
        let loginEmail = document.getElementById("uemailId").value;
        let loginPass =  document.getElementById("ePassword").value;
        let matchEmail = JSON.parse(localStorage.getItem("details"));
        let emailArray =[];
        let passArray=[];
         let result = matchEmail.map((email, i, matchEmail) =>{         //it holdes a key value paires and remember the orginal insertion order of the key
        
           emailArray.push(matchEmail[i].email);
           passArray.push(matchEmail[i].password);
        });
       // console.log(emailArray);

        if(emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1){
            console.log("You have successfully logged in");
            window.open("admindashboard.html");
        }else{
            alert("You have no registered with us try again!!");
        }
      
    }
    const loginForm = document.getElementById("logIn");
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
    });