<?php

$index = $_POST['index'];

$tasks_json = file_get_contents('./tasks.json');
$tasks = json_decode($tasks_json, true);

array_splice($tasks, $index, 1);

$response = [
  'results' => $tasks,
  'success' => true
];

$tasks = json_encode($tasks);
file_put_contents('./tasks.json', $tasks);

header('Content-type: application/json');
echo json_encode($response);