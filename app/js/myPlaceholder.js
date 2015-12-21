var myPlaceholder = (function () {

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('input[placeholder], textarea[placeholder]').placeholder();
	}

	return {
		init: init
	};

})();

myPlaceholder.init();