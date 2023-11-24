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
          this.tasks = res.data.results;
        })
    },

    sendTask() {

      if(this.newTask !== '') {

        const data = {
          text: this.newTask
        }

        axios
          .post('./addTask.php', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
          }).then((res) => {
            this.tasks = res.data.results;
          })

        this.newTask = '';
      }
    }
  },

  created() {
    this.fetchTasks();
  }
}).mount('#app')