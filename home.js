/* validate funtion for checking the validation of text */
function validate()
{
	var emailTextBox=document.getElementById("email");
	var email=emailTextBox.value;
	var emailMatch=/^([a-z0-9\.-])+@([a-z0-9-]+)\.([a-z]{2,5})(.[a-z]{2,3})?$/;
	emailTextBox.style.color="white";
	if(emailMatch.test(email))
	{
		emailTextBox.style.background="green";
	}
	else
	{
		emailTextBox.style.background="red";
	}

	var nameTextBox = document.getElementById("name");
	var name=nameTextBox.value;
	var nameMatch=/^[a-zA-Z\ ]{1,25}?$/;
	nameTextBox.style.color="white";
	if(nameMatch.test(name))
	{
		nameTextBox.style.background="green";
	}
	else
	{
		nameTextBox.style.background="red";
	}

	var phoneTextBox = document.getElementById("phone");
	var phone=phoneTextBox.value;
	var phoneMatch=/^[6,7,8,9]+[0-9]{9}?$/;
	phoneTextBox.style.color="white";
	if(phoneMatch.test(phone) && phone.length ==10 && phone > 6000000000)
	{
		phoneTextBox.style.background="green";
	}
	else
	{
		phoneTextBox.style.background="red";
	}
}

/* on click the submit button alert message shown */
function mySubmit()
{
	var emailTextBox=document.getElementById("email");
	var nameTextBox=document.getElementById("name");
	var phoneTextBox=document.getElementById("phone");
	var message=document.newform.message.value;
	if(emailTextBox.style.background!="green"||nameTextBox.style.background!="green"||phoneTextBox.style.background!="green"||message==null||message=="")
	{
		alert("Please fill each details\nEnter the details in correct format");
	}
	else
	{
		alert("Your details are submitted successfully.");
	}
}