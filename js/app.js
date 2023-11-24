const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },

  methods: {
    fetchTasks() {
      axios
        .get('./server.php')
        .then((res) => {
          console.log(res.data.results);
          this.tasks = res.data.results;
        }) 
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