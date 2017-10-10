<template>
  <div class="todolist">
      <h2>To Do List</h2>
      <h4>{{ date }}</h4>
      <ul>
          <li v-for="(todo, index) in todolist">
              <div class="list-content">
                  <label class="label-check" :for="'checkbox_todo_' + index">
                      <div class="check" v-if="todo.check"></div>
                      <input class="checkbox-todo" :id="'checkbox_todo_' + index"  type="checkbox" name="" v-model="todo.check">
                  </label>
                  <input class="input-todo" :class="{'checked': todo.check}" type="text" name="todolist[]" v-model="todo.name">

                  <div class="delete" @click="delete_item(index)">
                      X
                  </div>
              </div>

          </li>
      </ul>
      <button @click="add" class="btn-add">ADD</button>

      <!-- {{ todolist }} -->

  </div>
</template>

<script>
export default {
    name: 'todolist',
    data () {
        return {
            todolist: []
        }
    },
    computed: {
        date() {
            var date = new Date();
            return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
        }
    },
    methods: {
        add() {
            this.todolist.push({ name: '', check: false });
        },
        delete_item(index) {
            console.log(index);

            this.todolist.splice(index, 1);
        },

    }
}
</script>

<style scoped>

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 5px;
}

div.list-content {
    display: inline-flex;
    align-items: center;
}

label.label-check {
    width: 20px;
    height: 20px;
    border: 2px solid #ECD2DF;
    border-radius: 100%;
    display: inline-block;
    margin-right: 10px;
    position: relative;
    transition: all 3s;
}

.check {
    width: 10px;
    border: 1px solid;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 6px;
    left: 0px;
    background: #ECD2DF;
    transition: all 3s;
}
.check::after {
    position: absolute;
    content: '';
    width: 20px;
    border: 1px solid;
    background: #ECD2DF;
    transform: rotate(90deg);
    top: -11px;
    left: 0;
}

input.checkbox-todo {
    display: none;
}

input.input-todo {
    border: none;
    border-bottom: 2px solid #ECD2DF;
    outline: none;
    padding: 10px;
    font-size: 16px;
    background: transparent;
    color: #fff;
    letter-spacing: 0.7px;
}

input.input-todo.checked {
    text-decoration: line-through;
}

.btn-add {
    margin: 0 auto;
    display: block;
    border: 2px solid #ECD2DF;
    color: #fff;
    background: transparent;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
}

</style>
