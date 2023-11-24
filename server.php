<?php

$tasks_json = file_get_contents('./tasks.json');
$tasks = json_decode($tasks_json, true);

$response = [
  'success' => true,
  'results' => $tasks
];

header('Content-Type: application/json');
echo json_encode($response);