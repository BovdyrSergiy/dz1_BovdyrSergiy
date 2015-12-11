$(function() {
    $('.add-project-link').bind('click', function(e) {
        e.preventDefault();
        $('.project-element').bPopup({
    			fadeSpeed: 'fast',
    			followSpeed: 1000,
    			modalColor: '#58697A'
				});
    });
});