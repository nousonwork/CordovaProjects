$(document).ready(function(){
$("#login").click(function(){
	  $.ajax({url:"http://10.60.127.4:8443/cabserver/customers/login", crossDomain:true,
		  type:"POST",
		  data:"{ \"phone\": \""+$("#username").val() +"\", \"password\": \""+$("#inputPassword").val() +"\" }",
		  success:function(result){
	     // alert(result);
			  var obj = jQuery.parseJSON(result);			  
			  if(obj.code == "200"){				  
				  window.location='bookCab.html'; 
			  }else{
				  alert("Invalid Credentials.");
			  }
			  
			  
	  }});
	});});



$(document).ready(function(){
	$("#signup").click(function(){
		  $.ajax({url:"http://10.60.127.4:8443/cabserver/customers/signup", crossDomain:true,
			  type:"POST",
			  data:"{ \"phone\": \""+$("#phone").val() +"\", " 
			  +"\"mobileOperator\": \""+$("#mobileOperator").val() +"\", "
			  +"\"name\": \""+$("#inputFirst").val() + " " + $("#inputLast").val() + "\", "
			  +"\"sex\": \""+$("#selectbasic").val() +"\", "
			  +"\"email\": \""+$("#inputEmail").val() +"\", "
			  +"\"address\": \""+$("#textarea").val() +"\", "
			  +"\"password\": \""+$("#signupPassword").val() +"\" "
			  +	"}",
			  success:function(result){
		     // alert(result);
				  var obj = jQuery.parseJSON(result);			  
				  if(obj.code == "200"){				  
					  window.location='index.html';
					  alert("SignUp Successful.");
				  }else{
					  alert("SignUp Failed, Try Again.");
				  }
				  
				  
		  }});
		});});

$(document).ready(function(){
	$("#update").click(function(){
		  $.ajax({url:"http://10.60.127.4:8443/cabserver/admin/customers/update-customer-data", crossDomain:true,
			  type:"POST",
			  data:"{ \"phone\": \"1234567891\", "
			  +"\"userId\": \"172\", "
			  +"\"mobileOperator\": \""+$("#mobileOperator").val() +"\", "
			  +"\"firstName\": \""+$("#inputFirst").val() + "\", "
			  +"\"lastName\": \""+ $("#inputLast").val() + "\", "
			  +"\"sex\": \""+$("#selectbasic").val() +"\", "
			  +"\"mailId\": \""+$("#inputEmail").val() +"\", "
			  +"\"address\": \""+$("#textarea").val() +"\", "
			  +"\"password\": \""+$("#updatePassword").val() +"\" "
			  +	"}",
			  success:function(result){
		     // alert(result);
				  var obj = jQuery.parseJSON(result);			  
				  if(obj.code == "200"){				  
					  window.location='myProfile.html';
					  alert("Update Successful.");
				  }else{
					  alert("Update Failed, Try Again.");
				  }
				  
				  
		  }});
		});});