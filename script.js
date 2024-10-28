function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}


// password validation


function ch1 ()
{
var pass=document.getElementById("ta").value;
//alert("pass");

if(pass.length<=3)
{
//alert("pass");
document.getElementById("ra").innerHTML="weak password";
document.getElementById("ra").style.color="red";
}
else if(pass.length=3 && pass.length<=6 )
{
//alert("pass");
document.getElementById("ra").innerHTML="medium password";
document.getElementById("ra").style.color="blue";
}
else
{
document.getElementById("ra").innerHTML="strong password";
document.getElementById("ra").style.color="yellow";
}


}



//email validation
function ch()
{
var pemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var email=document.getElementById("tb").value;
//alert(email);

if(!pemail.test(email))
{
document.getElementById("ra").innerHTML="invalid";
document.getElementById("ra").style.color="red";
//alert("galit hai");
}

else
{
document.getElementById("ra").innerHTML="";
//alert("sahi hai");
}


//mobile validation

var mob=document.getElementById("td").value;
//alert("hiii");
if(mob.length==10)
{
document.getElementById("rd").innerHTML="";
}
else
{
document.getElementById("rd").innerHTML="Invalid";
document.getElementById("rd").style.color="red";
}




}






