let app = new Vue({
    el: '#app',
    data:{
        mensaje: 'hola',
        todos: [
            { id:Math.random(), text: 'Learn JavaScript', status: false },
            { id:Math.random(), text: 'Learn PHP', status: false },
            { id:Math.random(), text: 'Learn Python', status: false }
          ],
        newtask: ''
    },
    methods:{
        addTask: function() {
            this.todos.push({id:Math.random(), text: this.newtask, status: false})
            return this.newtask = ''
        },
        deleteTask: function(itemId){
            this.todos = this.todos.filter(x => x.id !== itemId)
          }
    }
})