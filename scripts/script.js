let body = $("body");
let skillsTopOffset = $("#skills").offset().top;

$(window).on("resize", function() {
      skillsTopOffset = $("#skills").offset().top;
});

$(window).scroll(function() {
	if(window.pageYOffset > skillsTopOffset - 400) {
		body.addClass("loaded");
	} else {
		body.removeClass("loaded");
	}
});


let icons = $(".hobbyIcons").children();
let iconsText = $(".facts").children();
let length = iconsText.length;
let currentActive;

for (let i = 0; i < length; i++) {
	// let currentIcon = $(icons[i]);
	$(icons[i]).click(function() {
		if (!$(iconsText[i]).hasClass("hide")) {
			$(icons[i]).attr("src", $(this).data("active") + ".png");
			$(icons[i]).css("transform", "");
			$(iconsText[i]).addClass("hide");
		} else {
			if (currentActive) {
				currentActive.css("transform", "");
				currentActive.attr("src", currentActive.data("active") + ".png");
			}
			$(icons[i]).css("transform", "scale(1.2)");
			$(icons[i]).attr("src", $(this).data("active") + "-active.png");
			
			$(iconsText).addClass("hide");
			$(iconsText[i]).removeClass("hide");

			currentActive = $(icons[i]);
		}
		return false;
	});
}


let filters = $("#filters").children();
let trvGal = $("#travelGallery");
let prjGal = $("#projectGallery");
let pstGal = $("#pastGallery");

$(filters[0]).click(function() {
	trvGal.addClass("hide");
  prjGal.removeClass("hide");
	pstGal.addClass("hide");
  return false;
});

$(filters[1]).click(function() {
	trvGal.removeClass("hide");
  prjGal.addClass("hide");
	pstGal.addClass("hide");
  return false;
});

$(filters[2]).click(function() {
	trvGal.addClass("hide");
  prjGal.addClass("hide");
	pstGal.removeClass("hide");
  return false;
});


$('[data-fancybox="gallery1"], [data-fancybox="gallery2"], [data-fancybox="gallery3"]').fancybox({
  buttons: [
    "close"
  ]
});