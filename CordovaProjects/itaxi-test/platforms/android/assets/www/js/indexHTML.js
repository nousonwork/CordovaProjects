$(document).ready(function(){
$("#login").click(function(){
	  $.ajax({url:"http://10.0.2.2:8080/cabserver/customers/login", 
		  crossDomain:true,
		  type:"POST",
		  data:"{ \"phone\": \""+$("#username").val() +"\", \"password\": \""+$("#inputPassword").val() +"\" }",
		  success:function(result){
	     //alert(result);
			  var obj = jQuery.parseJSON(result);			  
			  if(obj.code == "200"){
				
				  
				  document.writeln("<script type='text/javascript' src='http://www.jstorage.info/static/jstorage.js'></script>");
				  document.writeln("<script type='text/javascript' src='http://www.jstorage.info/static/jquery-json.js'></script>");
				
				  
				  $.jStorage.set("userId", obj.userId, {TTL: 600000});
				  $.jStorage.set("phone", obj.phone,  {TTL: 600000});
				  $.jStorage.set("mobileOperator", obj.mobileOperator,  {TTL: 600000});
				  $.jStorage.set("name", obj.name,  {TTL: 600000});
				  $.jStorage.set("lastName", obj.lastName,  {TTL: 600000});
				  $.jStorage.set("sex", obj.sex,  {TTL: 600000});
				  $.jStorage.set("mailId", obj.mailId,  {TTL: 600000});
				  $.jStorage.set("address", obj.address,  {TTL: 600000});
				  
				// alert($.jStorage.get("phone"));
				  
				  window.location='bookCab.html'; 
			  }else{
				  alert("Invalid Credentials.");
			  }
			  
			  
	  }});
	});});



$(document).ready(function(){
	$("#signup").click(function(){
		  $.ajax({url:"http://10.0.2.2:8080/cabserver/customers/signup", crossDomain:true,
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
					  alert("SignUp Successful.");
					  window.location='index.html';
					  
				  }else{
					  alert("SignUp Failed, Try Again.");
				  }
				  
				  
		  }});
		});});

$(document).ready(function(){
	$("#update").click(function(){
		  $.ajax({url:"http://10.0.2.2:8080/cabserver/admin/customers/update-customer-data", crossDomain:true,
			  type:"POST",
			  data:"{ \"phone\": \""+$.jStorage.get("phone")+"\", "
			  +"\"userId\": \""+$.jStorage.get("userId")+"\", "
			  +"\"mobileOperator\": \""+$("#mobileOperator").val() +"\", "
			  +"\"firstName\": \""+$("#name").val() + "\", "
			  +"\"lastName\": \""+ $("#lastName").val() + "\", "
			  +"\"sex\": \""+$("#sex").val() +"\", "
			  +"\"mailId\": \""+$("#mailId").val() +"\", "
			  +"\"address\": \""+$("#address").val() +"\", "
			  +"\"password\": \""+$("#updatePassword").val() +"\" "
			  +	"}",
			  success:function(result){
		     // alert(result);
				  var obj = jQuery.parseJSON(result);			  
				  if(obj.code == "200"){	
					  
					  $.jStorage.set("mobileOperator", $("#mobileOperator").val(),  {TTL: 600000});
					  $.jStorage.set("name", $("#name").val(),  {TTL: 600000});
					  $.jStorage.set("lastName", $("#lastName").val(),  {TTL: 600000});
					  $.jStorage.set("sex", $("#sex").val(),  {TTL: 600000});
					  $.jStorage.set("mailId", $("#mailId").val(),  {TTL: 600000});
					  $.jStorage.set("address", $("#address").val(),  {TTL: 600000});
			
					  alert("Update Successful.");
					  window.location='myProfile.html';
					  
				  }else{
					  alert("Update Failed, Try Again.");
				  }
				  
				  
		  }});
		});});