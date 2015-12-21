var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
		};

	// Прослушивает события
	var _setUpListners = function () {
		$('.add-project-link').on('click', _showModal); // открыть модальное окно
		$('#upload').on('change', _getNameImage); // загрузка картинки в форму
		$('#add-new-project').on('submit', _addProject); // добавление проекта		
		};
		

	// Работает с модальным окном
	var _showModal = function (e) {
		console.log('открыть модальное окно!');
		e.preventDefault();

		var divPopup = $('.project-element'),
			form = divPopup.find('.form');
		
        divPopup.bPopup({
    			fadeSpeed: 'fast',
    			followSpeed: 1000,
    			modalColor: '#58697A',
    			onClose: function () {
    				form.find('.success-mes').text('').hide();
    			}
		});
		};
	
	// Загрузка картинки
	var _getNameImage = function () {
   		var input = $(this),
    		name = input[0].files[0].name; // имя загруженного файла
   		$('.name-input-load').val(name);
  		};

	// Добавляет проект
	var _addProject = function (e) {
		console.log('добавление проекта!');
		e.preventDefault();

		// объявляем переменные
		var form = $(this),
				url = 'add_project.php',
				myServerGiveMeAnAnswer = _ajaxForm(form, url);
		
		myServerGiveMeAnAnswer.done(function(ans) {

			var successBox = form.find('.success-me'),
				errorBox = form.find('.error-mes');

			if(ans.status === 'OK'){
				errorBox.hide();
				successBox.text(ans.text).show();
			}else{
				successBox.hide();
				errorBox.text(ans.text).show();
			}
		})
		};

	// Универсальная функция
	// Для её работы используются
	// @form - форма
	// @url - адрес php файла к которому мы обращаемся
	// 1. Собирает данные из формы
	// 2. Проверяет форму
	// 3. Делает запрос на сервер и возращает ответ с сервера
	var _ajaxForm = function (form, url) {

		// if(!valid) return false;
		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		}).fail(function(ans) {
			console.log('Проблемы в PHP');
			form.find('.box-project-error').show();
		});

		return result;
		};

	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

myModule.init();