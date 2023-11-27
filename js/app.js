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
    },

    deleteTask(idx) {
      const data = {
        index: idx
      }

      axios
        .post('./deleteTask.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          this.tasks = res.data.results;
        })
    },

    toggleDone(id) {
      const data = {
        index: id
      }

      axios
        .post('./toggleTask.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          this.tasks = res.data.results;
        })
    },

    deleteAll() {
      axios
        .post('./deleteAll.php')
        .then((res) => {
          this.tasks = res.data.results;
        })
    }
  },

  created() {
    this.fetchTasks();
  }
}).mount('#app')