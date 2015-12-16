var myModule = (function () {

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('.add-project-link').on('click', _showModal); // открыть модальное окно
		$('#add-new-project').on('submit', _addProject); // добавление проекта
	};

	var _showModal = function (e) {
		console.log('открыть модальное окно!');
		e.preventDefault();

		var divPopup = $('.project-element');
		
        $('.project-element').bPopup({
    			fadeSpeed: 'fast',
    			followSpeed: 1000,
    			modalColor: '#58697A',
    			onClose: function () {

    			}
		});
	};

	var _addProject = function (e) {
		console.log('добавление проекта!');
		e.preventDefault();

		// объявляем переменные
		var form = $(this),
			url = 'add_project.php',
			data = form.serialize();

		console.log(data);

		// запрос на сервер
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log(ans);
			if(ans.status === 'OK'){
				form.find('.success-mes').text(ans.text).show();
			}else{
				form.find('.error-mes').text(ans.text).show();
			}
		})
		.fail(function() {
			console.log("error");
		})

	};

	return {
		init: init
	};

})();

myModule.init();