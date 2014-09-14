function walrusBox(width, amount, interval, direction){
	
	interval = interval || 5000;
	direction = direction || "left";
	
	if(direction == "left"){
		var i;
		$('#walrusBox').after('<section id="walrusBoxTriggers"><ul><li id="1" class="blackTrigger"></li></ul></section>');
		console.log("absfhbafhjs");
		for(i = 2; i <= amount; i++){
			$('#'+(i-1)).after("<li class='greyTrigger' id='" + i + "'></li>");
		}
	}
	else if(direction == "right"){
		var i;
		$('#walrusBox').after('<section id="walrusBoxTriggers"><ul><li id="' + amount + '" class="blackTrigger"></li></ul></section>');
		for(i = amount - 1; i > 0; i--){
			$('#'+(i+1)).before('<li class="greyTrigger" id="' + i + '"></li>');
		}
		$('#walrusBox').css("left", -(amount - 1)*width)
	}

	function changeNews(){
		var id = $('.blackTrigger').attr("id");
		if(direction == "left"){
			if(id < amount){
				id++;
			}
			else{
				id = 1;
			}
			var move = (id - 1) * width;
			$('#walrusBox').animate({left : -(move) }, 500)
		}
		else if(direction == "right"){
			if(id > 1){
				id--;
			}
			else{
				id = amount;
			}
			var move = (id - 1) * width;
			$('#walrusBox').animate({left : -(move) }, 500)
		}
		$(".blackTrigger").removeClass('blackTrigger').addClass('greyTrigger');
		$("#"+id).removeClass('greyTrigger').addClass('blackTrigger');
		setTimeout(function(){changeNews()}, interval);
	}
	
	setTimeout(function(){changeNews()}, interval);
	
	$('#walrusBoxTriggers li').on("click", function(){
		var id = $(this).attr("id");
		var move = (id - 1) * width;
		$(".blackTrigger").removeClass('blackTrigger').addClass('greyTrigger');
		$(this).removeClass('greyTrigger').addClass('blackTrigger');
		$('#walrusBox').animate({left : -(move) }, 500)
	})
}