$(document).ready(function(){
  var workerCount;

	function getStatus(){
		$.ajax({
		  url: "/status",
		}).done(function(data) {
		  $('#status').html(data);
      workerCount = (parseInt($('#worker-count').text())) / (parseInt($('#max-workers').text()) ) * 100+'%';
      $('.status-bar.workers .value').css('height', workerCount);
      $('.in-queue').text($('#queue-count').text()); 

		  setTimeout(getStatus,1000);
		});
	}

	getStatus();
});