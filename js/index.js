$(function(){
	$(".guest-list").owlCarousel({
	  navigation : true,
	  autoPlay: 3000, //Set AutoPlay to 3 seconds

	  items : 4,
	  itemsDesktop : [1199,3],
	  itemsDesktopSmall : [979,3]

	});

	$(".award-pick").click(function(){
		$(".award-pick").removeClass('active');
		$(this).addClass('active');
		var idx = $(this).attr('idx');
		$(".award-list").each(function(){
			if($(this).attr("idx") == idx){
				$(this).show();
			}else{
				$(this).hide();
			}
		})
	})
})