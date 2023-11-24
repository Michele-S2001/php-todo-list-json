const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: ''
    }
  },

  methods: {
    fetchTasks() {
      axios.get('./server.php');
    },

    sendTask() {
      console.log(this.newTask);

      axios.post('./addTask.php');

      this.newTask = '';
    }
  },

  created() {
    this.fetchTasks();
  }
}).mount('#app')