function validate()
{
	var passwordInput = document.getElementById("password");
	var verifyInput = document.getElementById("verify");
	if (passwordInput.value != verifyInput.value)
	{
		alert("The passwords entered do not match");
	}
	else if (passwordInput.value.length < 8)
	{
		alert("Password must be at least 8 characters long");
	}
}
