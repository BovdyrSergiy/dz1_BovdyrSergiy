var validation = (function () {

	// Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);
	};

	var _removeError = function() {
		$(this).removeClass('has-error');
	};

	var _clearForm = function(form) {
		var form = $(this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');
	};

	// Создаёт тултипы
	var _createQtip = function (element, position) {
		// Позиция тултипа
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		}else{
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}

		// Инициализация тултипа
		element.qtip({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded qtip-red',
				tip: {
					height: 7,
					width: 10,
				}
			}
		}).trigger('show');
	};

	// Универсальная функция
	var validateForm = function (form) {

		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
				valid = true;

		// Пройдёмся по всем элементам формы
		$.each(elements, function (index, val){
			var element = $(val),
							val = element.val(),
							pos = element.attr('qtip-position');

			if(val.length === 0) {
					element.addClass('has-error');
					_createQtip(element, pos);
					valid = false;
				}

		});

		return valid;
	};

	// Возвращаем объект (публичные методы)
	return {
		init: init,
		validateForm: validateForm
	};

})();

validation.init();