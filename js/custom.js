var fName=document.getElementById("fName");
var fnameErr=document.getElementById("fnameErr");

var email=document.getElementById("email");
var emailErr=document.getElementById("emailErr");

var password=document.getElementById("password");
var passwordErr=document.getElementById("passwordErr");

var conPass=document.getElementById("conPass");
var conpassErr=document.getElementById("conpassErr");

function bellal()
{
    if(fName.value == "")
    {
        fName.style.borderColor="red";
        fName.focus();
        fnameErr.innerHTML= "Enter Name First";

        return false;
    }

    if(email.value == "")
    {
        email.style.borderColor="red";
        email.focus();
        emailErr.innerHTML= "Enter Name First";

        return false;
    }

    if(password.value == "")
    {
        password.style.borderColor="red";
        password.focus();
        passwordErr.innerHTML= "Enter Name First";

        return false;
    }

    if(password.value.length <= 5)
    {
        password.style.borderColor="red";
        password.focus();
        passwordErr.innerHTML= "Mineum 6 carrecter";

        return false;
    }

    if(conPass.value == "")
    {
        conPass.style.borderColor="red";
        conPass.focus();
        conpassErr.innerHTML= "Enter Name First";

        return false;
    }

    if(conPass.value != password.value)
    {
        conPass.style.borderColor="red";
        conPass.focus();
        conpassErr.innerHTML= "donts match";

        return false;
    }
}

function aponKhan()
{
    if(fName.value != "")
    {
        fName.style.borderColor="#dbd1d1";
        fnameErr.innerHTML= "";
    }

    if(email.value != "")
    {
        email.style.borderColor="#dbd1d1";
        emailErr.innerHTML= "";
    }

    if(password.value != "")
    {
        password.style.borderColor="#dbd1d1";
        passwordErr.innerHTML= "";
    }

    if(conPass.value != "")
    {
        conPass.style.borderColor="#dbd1d1";
        conpassErr.innerHTML= "";
    }
}

fName.addEventListener('blur',aponKhan);
email.addEventListener('blur',aponKhan);
password.addEventListener('blur',aponKhan);
conPass.addEventListener('blur',aponKhan);
