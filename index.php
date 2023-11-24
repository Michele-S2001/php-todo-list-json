<?php 
$title = 'PHP ToDo List JSON';
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title ?></title>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="https://unpkg.com/vue@3"></script>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  
  <div id="app">
    <div class="container">
      <div class="flex">

        <div class="tasks-wrapper">
          <h1 class="title">TODO - List</h1>
          <input 
            @keyup.enter="sendTask()"
            v-model="newTask"
            class="input-field" 
            type="text" 
            placeholder="scrivi una task">
  
          <ul class="tasks-list">
            <li class="task">
              <span class="text">Lorem, ipsum dolor.</span>
              <span class="delete">&#215;</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <script src="./js/app.js"></script>
</body>
</html>