<?php
	
	$name = $_POST['projectName'];
	$data = array();



	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя!';
	}else{
		$data['status'] = 'OK';
		$data['text'] = 'Данные введены!'
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

 ?>