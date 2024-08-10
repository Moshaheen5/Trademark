var signMail=document.getElementById("userMail");
var signPass=document.getElementById("userPass");
var signBtn=document.getElementById("subBtn");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
if(localStorage.getItem("users")!=null){
    userList= JSON.parse(localStorage.getItem("users"));  
}
signMail.addEventListener("input",validateMail)
function validateMail(){
    for(i=0;i<userList.length;i++){
        if(userList[i].userMail != signMail.value){
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
}
signPass.addEventListener("input",validatePass)
function validatePass(){
    for(i=0;i<userList.length;i++){
        if(userList[i].userPass != signPass.value){
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
}
var Email;
var password;
signBtn.addEventListener("click",function(){
    if(validateMail() & validatePass() ){
        password=signPass.value;
        Email= signMail.value;
        localStorage.setItem("currentUser", JSON.stringify(userList[i].userName));
        window.location.href="home.html"
    }else{
        signBtn.nextElementSibling.textContent= "Please Check your Data!!";
    }
    reset();
})
function reset(){
    signMail.value="";
    signPass.value="";
}
