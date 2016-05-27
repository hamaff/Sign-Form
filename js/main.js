;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function(){

		// show sign in form
		$('.sign-in-btn').on('click', function(event){
			$('.wrapper').removeClass('wrapper-signup wrapper-forgot')

			event.preventDefault();
		});

		// show sign up form	
		$('.sign-up-btn').on('click', function(event){
			$('.wrapper').addClass('wrapper-signup').removeClass('wrapper-forgot')

			event.preventDefault();
		});

		// skip sign in form
		$('.form-forgot .sign-up-btn').on('click', function(){
			$('.form-signin').hide();

			setTimeout(function(){
				$('.form-signin').show();
			}, 300);
		});

		// show forgot password form	
		$('.forgot-btn').on('click', function(event){
			$('.wrapper').addClass('wrapper-forgot')

			event.preventDefault();
		});
		
	});
	
})(jQuery, window, document);
