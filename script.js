function validate()
{
    var fName = document.form.fName.value;
    var lName = document.form.lName.value;
    var email = document.form.email.value;
    var cNumber =document.form.cNumber.value;
    var address =document.form.address.value;

    if (fName==""){
        document.getElementById("fName").innerHTML="Enter your first name";
        return (false);
    }
    else{
        document.getElementById("fName").innerHTML="";
    }
    
    if (lName==""){
        document.getElementById("lName").innerHTML="Enter your last name";
        return(false);
    }
    else{
        document.getElementById("lName").innerHTML="";

    }
    if (email==""){
        document.getElementById("email").innerHTML="Enter the email id";
        return(false);
    }
    else{
        document.getElementById("email").innerHTML="";
    }
    if (cNumber==""){
        document.getElementById("cNumber").innerHTML="Enter your contact number";
        return(false);
    }
    else{
        document.getElementById("cNumber").innerHTML="";
    }
    if (address==""){
        document.getElementById("address").innerHTML="Enter the address";
        return(false);
    }
    else{
        document.getElementById("address").innerHTML="";
    }
}