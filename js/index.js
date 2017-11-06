$(function() {
	$('#dowebok').fullpage({
		menu: '.menu',

		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		sectionsColor: ['#000', '#000', '#000', '#000', '#000'],
		afterLoad: function(anchorLink, index) {
			if(index == 1) {
				$('.section1 .contain img:eq(1)').addClass("fd").removeClass("sx")

			}
			if(index == 2) {
				$('.section2').find("ul").stop(true).delay(600).fadeIn(800);
				$.each([3000, 3400, 3800, 4200], function(index, value) {
					$('.section2').find('p').eq(index).stop(true).delay(1000).animate({
						left: '0'
					}, value, 'easeOutExpo');
				});

			}
			if(index == 3) {
				$('.section3').find('.jdt').delay(300).animate({
					bottom: '-20px'
				}, 1000, function() {
					$.each([95, 78, 68, 78, 92, 76, 87, 69], function(index, value) {
						$('.sample-pb .number-pb').eq(index).NumberProgressBar({
							duration: 6000,
							current: value
						});
					});
				});

			}
			if(index == 4) {
				$('.section4 .contain .con_mid').stop(true).delay(500).animate({
					left: "13%"
				}, 1500, 'easeOutExpo');
			}
			if(index == 5) {
				$('.section5').find('p').eq(0).stop(true).delay(500).animate({
					left: "0"
				}, 800, 'easeOutExpo').end().eq(1).stop(true).delay(1300).animate({
					right: '0'
				}, 800, 'easeOutExpo').end().eq(2).stop(true).delay(2100).slideDown("slow");

				$('.section5 .contain ul').stop(true).delay(2800).fadeIn(800);
			}
		},
		onLeave: function(index, direction) {
			if(index == '1') {
				$('.section1 .contain img:eq(1)').removeClass("fd").addClass("sx")
			}
			if(index == '2') {
				$('.section2').find("ul").stop(true).delay(500).fadeOut(500);
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3') {
				$('.section3').find('.jdt').delay(500).animate({
					bottom: '-150%'
				}, 500, function() {
					$.each([66, 78, 68, 78, 92, 76, 87, 69], function(index, value) {
						$('.sample-pb .number-pb').eq(index).NumberProgressBar({
							duration: 1000,
							current: 0
						});
					});
				});

			}
			if(index == '4') {
				$('.section4 .contain .con_mid').stop(true).delay(500).animate({
					left: "-130%"
				}, 1000, 'easeOutExpo');
				$(".con_mid").next().stop(true).animate({
					left: "120%"
				}, 1000);
				$(".section .contain h2").fadeIn(700);
			}
			if(index == '5') {
				$('.section5').find('p').eq(0).stop(true).animate({
					left: "-120%"
				}, 50, 'easeOutExpo').end().eq(1).stop(true).animate({
					right: '-120%'
				}, 50, 'easeOutExpo').end().eq(2).stop(true).slideUp("slow");
				$('.section5 .contain ul').stop(true).fadeOut(100);
			}
		}
	});
	$(".small .containers").css("display", "none");
	$(".small .behind").css("display", "none");
	$("#close").click(function() {
		$(this).css("display", "none");
		$("#open").css("display", "block");
		$(".small .containers").stop(true).slideUp(500);
		$(".small .behind").css("display", "none");
		$(".contain").removeClass("tra_sec");
	})
	$(".behind,#menu li a").click(function() {
		$("#open").css("display", "block");
		$("#close").css("display", "none");
		$(".small .containers").stop(true).slideUp(500);
		$(".small .behind").css("display", "none");
		$(".contain").removeClass("tra_sec");
	})
	$("#open").click(function() {
		$(this).css("display", "none");
		$("#close").css("display", "block");
		$(".small .containers").stop(true).slideDown(500);
		$(".small .behind").css("display", "block");
		$(".contain").addClass("tra_sec");
	})
	$(".con_mid").find("ul li").click(function() {
		i = $(this).index();
		$(".section .contain h2").fadeOut(700);
		$(".con_mid").stop(true).animate({
			left: "120%"
		}, 700, function() {
			$("#show_pro").find(".show_pro_s").eq(i).css("display", "block");
		}).next().stop(true).animate({
			left: "7%"
		}, 700);
		$.each([700, 1000, 1300,1600], function(index, value) {
			$(".show_pro_s").eq(i).find("ul li").eq(index).stop(true).delay(value).animate({
				top: "-=20" + "px",
				opacity: 1
			}, 1500)
		});
	})

	$("#clo_show").click(function() {
		$(".section .contain h2").fadeIn(700);
		$(".con_mid").stop(true).animate({
			left: "13%"
		}, 700, function() {
			$(".show_pro_s").css("display", "none");
		}).next().stop(true).animate({
			left: "120%"
		}, 700);
		$(".show_pro_s").eq(i).find("ul li").stop(true).animate({
			top: "+=20" + "px",
			opacity: 0
		}, 200)
	})
	//nicescroll
	$(".con_mid").niceScroll({
		cursorcolor: "#333",
		smoothscroll: true,
		cursorborder: "1px solid #666",
		cursorwidth: "8px"
	});

});