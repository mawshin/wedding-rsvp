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

    function requiredField(element) {
		element.find('.required-field').attr('required', 'required');
	}

	function requiredFieldHidden(element) {
		element.find('.required-field').removeAttr('required');
	}

    $('[name^="additional_guest_diet_preference"]').on('change', function() {
    	if($(this).val() === "Kid's meal" || $(this).val() === "Toddler (would not need to cater food)") {
    		$(this).parent().next().next().show();

    		requiredField($(this).parent().next().next());
    	} else {
    		$(this).parent().next().next().hide();

    		requiredFieldHidden($(this).parent().next().next());
    	}
    });

    $('[name^="additional_guest"]').on('change', function() {
    	if($(this).val() != "0") {
    		$('.section3').show();

    		switch ($(this).val()) { 
				case '1 additional guest': 
					$('.guest1').show();

					$('.guest2, .guest3, .guest4').hide();

					requiredField($('.guest1'));
					requiredFieldHidden($('.guest2'));
					requiredFieldHidden($('.guest3'));
					requiredFieldHidden($('.guest4'));
					break;
				case '2 additional guests': 
					$('.guest1, .guest2').show();

					$('.guest3, .guest4').hide();

					requiredField($('.guest1'));
					requiredField($('.guest2'));
					requiredFieldHidden($('.guest3'));
					requiredFieldHidden($('.guest4'));
					break;
				case '3 additional guests': 
					$('.guest1, .guest2, .guest3').show();

					$('.guest4').hide();

					requiredField($('.guest1'));
					requiredField($('.guest2'));
					requiredField($('.guest3'));
					requiredFieldHidden($('.guest4'));
					break;		
				case '4 additional guests': 
					$('.guest1, .guest2, .guest3, .guest4').show();

					requiredField($('.guest1'));
					requiredField($('.guest2'));
					requiredField($('.guest3'));
					requiredField($('.guest4'));
					break;
			}

    	} else {
    		$('.section3').hide();
    	}
    });

    $('#guest-form').on('change', 'select.error', function (e) {
	    if($(e.target).val() != '') {
    		$(this).removeClass('error').addClass('valid');
    		$(this).next().hide();
    	}
	});

    function submitForm() {
	    console.log('here');
	    $.ajax({
	        url: '//api.apispreadsheets.com/data/5636/',
	        type: 'post',
	        data: $('#guest-form').serializeArray(),
	        success: function(){
	            alert('Your RSVP has been submitted! We look forward to meeting you on our big day!');

	            $('#guest-form')[0].reset();
	        },
	        error: function(){
	            alert('There was an error, please try to submit the form later.');
	        }
	    });
	}

	$('#form-submit').click(function() {
		var form = $('#guest-form');

		form.validate({
		    focusInvalid: true
		});

		if(form.valid()) {
	        console.log('submit');
	        submitForm();
	    }

	});
});