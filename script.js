var signName=document.getElementById("userName");
var signMail=document.getElementById("userMail");
var signPass=document.getElementById("userPass");
var signRepass=document.getElementById("userRepass");
var signBtn=document.getElementById("subBtn");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");
var mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
var userList=[];
var namena=/^0-9$/
function validateName(){
}
signName.addEventListener("input",validateName)
function validateName(){
    if(signName.value==""|| namena.test(signName)==true){
        p1.classList.replace("d-none","d-block")
        signName.classList.add("is-invalid");
        signName.classList.remove("is-valid");
    }else{
        p1.classList.replace("d-block","d-none");
        signName.classList.remove("is-invalid");
        signName.classList.add("is-valid");
        return true;
    }
}
signMail.addEventListener("input",validateMail)
function validateMail(){
    if(signMail.value=="" || mailRegex.test(signMail.value)==false){
        p2.classList.replace("d-none","d-block")
        signMail.classList.add("is-invalid");
        signMail.classList.remove("is-valid");
    }else{
        p2.classList.replace("d-block","d-none");
        signMail.classList.remove("is-invalid");
        signMail.classList.add("is-valid");
        return true;
    }
}
signPass.addEventListener("input",validatePass)
function validatePass(){
    if(signPass.value=="" || passRegex.test(signPass.value)==false){
        p3.classList.replace("d-none","d-block");
        signPass.classList.add("is-invalid");
        signPass.classList.remove("is-valid");
        
    }else{
        p3.classList.replace("d-block","d-none");
        signPass.classList.remove("is-invalid");
        signPass.classList.add("is-valid");
        return true;
    }
}
signRepass.addEventListener("input",validatRepass)
function validatRepass(){
    if(signRepass.value=="" || passRegex.test(signRepass.value)==false || signRepass.value!=signPass.value){
        p4.classList.replace("d-none","d-block")
        signRepass.classList.add("is-invalid");
        signRepass.classList.remove("is-valid");
    }else{
        p4.classList.replace("d-block","d-none");
        signRepass.classList.remove("is-invalid");
        signRepass.classList.add("is-valid");
        return true;
    }
}
signBtn.addEventListener("click",function(){
    if(validateName() & validateMail() & validatePass() & validatRepass() ){
        var user={
            userName:signName.value,
            userMail:signMail.value,
            userPass:signPass.value
        }
        console.log(user);
        userList.push(user);
        localStorage.setItem("users", JSON.stringify(userList));
        reset();
        signBtn.nextElementSibling.textContent= "saved successfully";
        window.location.href="login.html"

    }
    else{
        console.log("nono")
    }
})
function reset(){
    signName.value="";
    signMail.value="";
    signPass.value="";
    signRepass.value="";
}