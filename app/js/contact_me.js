var contactMe = (function () {

	// Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function () {
		$('#contact-me').on('submit', submitForm);
	};

	var submitForm = function(form) {
		var url = form.attr('action');
		var data = new FormData($(form)[0]);
		$.ajax({
			url: url,
			type: 'POST',
			processData: false,
			contentType: false,
			dataType: 'json',
			data: data
		}).done(function(data) {
			console.log('Форма отправлена!');
			}
		).fail(function() {
			console.log('Проблемы в PHP');
		});
	};


	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

contactMe.init();