$(document).ready(function(){
  

	function getStatus(){
		$.ajax({
		  url: "/status",
		}).done(function(data) {
		  $('#status').html(data);
		  setTimeout(getStatus,1000);
		});
	}

	getStatus();

});