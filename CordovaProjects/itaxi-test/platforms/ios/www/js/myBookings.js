$(window).load(function(){
	  $.ajax({url:"http://10.66.127.4:8080/cabserver/customers/bookings/list", crossDomain:true,
		  type:"POST",
		  data:"{\"phone\":\""+$.jStorage.get("phone")+"\","		
		  		+"\"userId\":\""+$.jStorage.get("userId")+"\""
		  		+"}",
		  success:function(result){
	      //alert(result);
	      	      
			  var obj = jQuery.parseJSON(result);
			 // alert(obj[0].bookingId);
			  if(obj[0].code == "200"){
				  //alert("Booking Successful.");
				 
				  $("#mylist").html("TESTING 2");
				  
				  var htmlData = "";
				  
				  for (var i=0, len=obj.length; i < len; i++) {
					  
					  htmlData+= "<li><table>"
			  		+"<tr><td> <b>BookingId:</b> </td> <td> "+obj[i].bookingId +" </td> </tr>"
			  		+"<tr><td> <b>Name:</b> </td> <td> "+obj[i].name +" </td> </tr>"
			  		+"<tr><td> <b>Mobile:</b> </td> <td> "+obj[i].phone +" </td> </tr>"
			  		+"<tr><td> <b>BookingDate:</b> </td> <td> "+obj[i].datetime +" </td> </tr>"
			  		+"<tr><td> <b>From:</b> </td> <td> "+obj[i].from +"</td> </tr>"
			  		+"<tr><td> <b>To:</b> </td> <td>"+obj[i].to+" </td> </tr>"
			  		+"<tr><td> <b>BookingStatus:</b> </td> <td>"+ obj[i].bookingStatus +"</td> </tr>"
			  		+"<tr><td> <b>DriverName:</b> </td> <td> "+obj[i].driverName +" </td> </tr>"
			  		+"<tr><td> <b>DriverPhone:</b> </td> <td>"+ obj[i].driverPhone +" </td> </tr>"			 
			  		+"</table></li>"
			  		+"<hr>";
			  		
				    }
				  
				  
				  $("#mylist").html(htmlData);
				  
			  }else{
				  alert("No Bookings.");
			  }
			  
			  
	  }});
	});