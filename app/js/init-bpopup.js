var myModule = (function () {

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('.add-project-link').on('click', _showModal); // открыть модальное окно
	};

	var _showModal = function (e) {
		e.preventDefault();
        $('.project-element').bPopup({
    			fadeSpeed: 'fast',
    			followSpeed: 1000,
    			modalColor: '#58697A'
		});
	};

	return {
		init: init
	};

})();

myModule.init();