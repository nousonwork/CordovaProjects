var myRequest;

//The greatest part of the loadXML() function

//is similar to the previous example:

function login()

{

if (window.XMLHttpRequest)

{

myRequest = new XMLHttpRequest();

}

else

{

myRequest = new ActiveXObject("Microsoft.XMLHTTP");

}

myRequest.open("POST", "http://localhost:8443/cabserver/customers/login", true);

myRequest.send("{ \"phone\": \"1234567891\", \"password\": \"12345\" }");

myRequest.onreadystatechange = getData;	


}
	

/******************************************/


function getData()

{

//	alert(myRequest.responseText);
//Get a reference to the div element

//where the returned data will be displayed:

var myDiv = document.getElementById("test");

//The part of the code that checks the response

//is the same as the previous example:

if (myRequest.readyState ===4)

{

if (myRequest.status === 200)

{

	//alert(myRequest.responseText);
	
	window.location='bookCab.html';



}

}

}