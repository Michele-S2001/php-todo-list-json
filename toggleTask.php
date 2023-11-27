<?php

$index = $_POST['index'];
$index = intval($index);

$tasks_json = file_get_contents('./tasks.json');
$tasks = json_decode($tasks_json, true);

$tasks[$index]['done'] = !$tasks[$index]['done'];

$response = [
  'results' => $tasks,
  'success' => true
];

$tasks = json_encode($tasks);
file_put_contents('./tasks.json', $tasks);

header('Content-type: application/json');
echo json_encode($response);