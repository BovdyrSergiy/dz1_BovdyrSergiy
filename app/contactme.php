<?php

	$data = array();
	$data['status'] = $_POST['addName'];
	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

 ?>