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
      },

      onOffBarred(i){
        // console.log('ciao');
        // console.log(this.toDoExercises[i].done);
        if(this.toDoExercises[i].done === false){
          this.toDoExercises[i].done = true;
        } else {
          this.toDoExercises[i].done = false;
        }
      },

      del(i){
        this.toDoExercises.splice(i, 1);
        console.log(this.toDoExercises);
      }
    }
    

    }).mount('#app');