jQuery(function () {

	$('.burger_cont').click(function(){
		$('.burger').toggleClass('_active');
		$('.menu_list').slideToggle(500);
	});
	function tabs () {
		$(".tab_item").not(":first").hide();
		$(".wrapper .tab").click(function() {
			$(".tab").removeClass("_active").eq($(this).index()).addClass("_active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("_active");
	}
	tabs();

});