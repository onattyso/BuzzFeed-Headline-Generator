//fb share
function fbs_click()
{u="http://onattyso.com";t="Buzzfeed Headline Generator 2";window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}

//twitter share
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



var updateHeadline = function() {
	// AJAX Request: get index (http://192.168.124.28:5000/headline.json)
	$.ajax({
		// url: "http://localhost:5000/headline.json",
		url: window.location.href+"/headline.json",
		type: "GET",
		// crossDomain: true,
		// dataType: "jsonp",
		timeout: 30000,

		// Success Callback: http://192.168.124.28:5000/headline.json
		success:function(data, textStatus) {
			console.log("Received response HTTP "+textStatus+" (http://192.168.124.28:5000/headline.json)");
			// console.log(data);
			$("#headline").html(data);
		},

		// Error Callback: http://192.168.124.28:5000/headline.json
		error:function(jqXHR, textStatus, errorThrown) {
			console.log("Error during request "+textStatus+" (http://192.168.124.28:5000/headline.json)");
			console.log(errorThrown);
		},
	});
}

updateHeadline();
