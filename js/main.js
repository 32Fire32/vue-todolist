'strict mode'

  const { createApp } = Vue;

  createApp({
    data() {
      return {
        newExerc: "",
        toDoExercises: [
          {
              text: 'Riguardare Html',
              done: false,
          }, {
              text: 'Ripassare la documentazione di Bootstrap',
              done: false,
          }, {
              text: 'Studiare JS',
              done: false,
          }, 
          ]
      }
    },

    methods: {
      addExerc() {
          const objNewExerc = {
            text: this.newExerc,
            done: false
          }
          this.toDoExercises.push(objNewExerc);
          this.newExerc="";
      }}

  }).mount('#app')