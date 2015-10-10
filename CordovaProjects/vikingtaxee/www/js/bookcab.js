$(document).ready(function(){
	
$("#booktaxi").click(function(){
	 $.ajax({url:"http://118.139.177.195:8443/cabserver/customers/bookings", crossDomain:true,
		  type:"POST",
		  data:"{ \"phone\": \""+$.jStorage.get("phone") +"\","		
		  		+"\"name\": \""+$.jStorage.get("name") +"\", " 
		  		+"\"from\": \""+$("[name=from]").val() +"\","
		  		+"\"to\": \""+$("[name=to]").val() +"\","
		  		+"\"noOfPassengers\": \""+$("#noOfPassengers").val() +"\","
		  		+"\"mobileOperator\": \""+$("#mobileOperator").val() +"\","		  		
		  		+"\"airline\": \""+$("#airline").val() +"\","
		  		+"\"flightNumber\": \""+$("#flightNumber").val() +"\","
		  		+"\"datetime\": \""+$("#datetime").val() +"\","
		  		+"\"type\": \"MOBILE\","
		  		+"}",
		  success:function(result){
	      //alert(result);
			  
					 
			  //var userId = $.jStorage.get("userId");
			  //var phone = $.jStorage.get("phone");
			  //var name = $.jStorage.get("name");
			  //alert(userId + ", "+ phone + ", "+name );
	      	    
			  var obj = jQuery.parseJSON(result);			  
			  if(obj.code == "200"){
				  alert("Booking Successful.");
				  window.location='bookCab.html';
				  
			  }else{
				  alert("Booking Failed. Try Again.");
			  }	  
			  
	  }});	
	
	});

});