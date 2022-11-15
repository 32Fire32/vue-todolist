'strict mode'

  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: 'hello vue',
        toDoExercises : [
          'Esercizi di Html', 
          'Studiare la documentazione di Bootstrap', 
          'Ripassare JS'
        ],
      }
    }
  }).mount('#app')

  console.log(Vue.createApp);