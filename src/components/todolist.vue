<template>
  <div class="todolist">
      <h1 class="title">To Do List</h1>
      <h3>{{ date }}</h3>
      <ul>
          <li v-for="(todo, index) in todolist" @mouseover="show_btn(index)">
              <div class="list-content">
                  <label class="label-check" :for="'checkbox_todo_' + index">
                      <div class="check" v-if="todo.check"></div>
                      <input class="checkbox-todo" :id="'checkbox_todo_' + index"  type="checkbox" name="" v-model="todo.check">
                  </label>
                  <input class="input-todo" :class="{'checked': todo.check}" type="text" name="todolist[]" v-model="todo.name">

                  <div class="delete" @click="delete_item(index)">
                      <span class="icon-delete" :class="{active: index == now_active}"></span>
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
            todolist: [],
            now_active: ''
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
        show_btn(index) {
            console.log('hihi');
            this.now_active = index;
        },

    }
}
</script>

<style lang="scss" scoped>

$main-color: #ECD2DF;

h1.title {
    margin: 0;
}

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
    border: 2px solid $main-color;
    border-radius: 100%;
    display: inline-block;
    margin-right: 10px;
    position: relative;
    transition: all 3s;
}

// 打勾符號
.check {
    width: 10px;
    border: 1px solid;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 6px;
    left: 0px;
    background: $main-color;
    transition: all 3s;

    &:after {
        position: absolute;
        content: '';
        width: 20px;
        border: 1px solid;
        background: $main-color;
        transform: rotate(90deg);
        top: -11px;
        left: 0;
    }
}

// 原生的checkbox隱藏
input.checkbox-todo {
    display: none;
}

input.input-todo {
    border: none;
    border-bottom: 2px solid $main-color;
    outline: none;
    padding: 10px;
    font-size: 16px;
    background: transparent;
    color: #fff;
    letter-spacing: 0.7px;

    &.checked {
        text-decoration: line-through;
    }
}

.delete {
    position: relative;
    margin-left: 10px;
    cursor: pointer;
}

.icon-delete {
    width: 20px;
    border: 1px solid;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 0px;
    left: 0px;
    background: $main-color;
    display: none;
    // transition: all 3s;

    &:after {
        position: absolute;
        content: '';
        width: 20px;
        border: 1px solid;
        background: $main-color;
        transform: rotate(90deg);
        top: -1px;
        left: -1px;
    }

    &.active {
        display: block;
    }

}

.btn-add {
    margin: 0 auto;
    display: block;
    border: 2px solid $main-color;
    color: $main-color;
    background: transparent;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
}

</style>
