console.clear();

var EmailField=document.getElementById("email-field");
var SubBTN=document.getElementById("submit-btn");
var EmailError=document.getElementById("error");
var pattern=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

SubBTN.onclick =function() {
    if(!EmailField.value.match(pattern)){
        EmailError.style.display="block";
        EmailError.innerHTML="Please provide a valid email address";
        EmailField.style.borderColor="hsl(354, 100%, 66%)";
        return false;
    }else{
        EmailError.innerHTML="";
        EmailField.style.borderColor=" hsl(0, 0%, 59%)";
        return true;
    }

}