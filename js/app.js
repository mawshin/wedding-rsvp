$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover();

    $('#attending').on('change', function() {
    	if($(this).val() === 'Yes') {
    		$('.section2').show();
    	} else {
    		$('.section2').hide();
    	}
    });

    $('[name^="additional_guest_diet_preference"]').on('change', function() {
    	if($(this).val() === "Kid's meal" || $(this).val() === "Toddler (would not need to cater food)") {
    		$(this).parent().next().next().show();
    	} else {
    		$(this).parent().next().next().hide();
    	}
    });

    $('[name^="additional_guest"]').on('change', function() {
    	if($(this).val() != "0") {
    		$('.section3').show();

    		switch ($(this).val()) { 
				case '1 additional guest': 
					$('.guest1').show();
					break;
				case '2 additional guests': 
					$('.guest1, .guest2').show();
					break;
				case '3 additional guests': 
					$('.guest1, .guest2, .guest3').show();
					break;		
				case '4 additional guests': 
					$('.guest1, .guest2, .guest3, .guest4').show();
					break;
			}

    	} else {
    		$('.section3').hide();
    	}
    });
});