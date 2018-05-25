
function form_validate(form)
{
	var fname=document.getElementById('fname').value;
	var email=document.getElementById('email').value;
	var mob=document.getElementById('num').value;
	var Country=document.getElementById('countries').value;
	if (fname.length==0)
	{
		alert("Please fill Name");
		document.getElementById('fname').focus();
		return false;
	}
	else if (email.length==0) 
	{
		alert("Please fill Email");
		document.getElementById('email').focus();
		return false;
	}
	else if (countries=="slt") 
	{
		alert("Please Choose Your Country");
		document.getElementById('countries').focus();
		return false;
	}
	else if (mob.length==0) 
	{
		alert("Please fill MObile Number");
		document.getElementById('num').focus();
		return false;
	}
	else
	{
		alert("Your Proceeded to the ticket booking page");
		return false;
	}
}
