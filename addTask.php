<?php
$new_task_text = $_POST['text'] ?? '';

$response = [
  'success' => true
];

if($new_task_text !== '' || trim($new_task_text)) {

  $tasks_json = file_get_contents('./tasks.json');
  $tasks = json_decode($tasks_json, true);
  
  $tasks[] = [
    'text' => $new_task_text,
    'done' => false
  ];

  $response['results'] = $tasks;

  $tasks = json_encode($tasks);
  file_put_contents('./tasks.json', $tasks);

} else {
  $response['success'] = false;
  $response['message'] = 'Empty task text';
}

header('Content-type: application/json');
echo json_encode($response);