function validateForm()
{
	var x = document.forms["forma"]["fname"].value;
	if(x== "")
		alert("your name must be filled out");
	return false;
}
}
