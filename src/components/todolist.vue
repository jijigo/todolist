<template>
  <div class="todolist">
      <h2 class="title">To Do List</h2>
      <h4>{{ date }}</h4>
          <transition-group tag="ul" name="list" class="list">
              <li v-for="(todo, index) in todolist" class="list__item" :key="index" @mouseover="show_btn(index)">
                  <div class="list-content">
                      <label class="label-check" :for="'checkbox_todo_' + index">
                          <div class="check" v-if="todo.check"></div>
                          <input class="checkbox-todo" :id="'checkbox_todo_' + index"  type="checkbox" name="" v-model="todo.check">
                      </label>
                      <input class="input-todo" :class="{'checked': todo.check}" type="text" name="todolist[]" v-model="todo.name">

                      <div class="delete" @click="delete_item(index)">
                          <span class="icon-delete" :class="{active: index == now_active}" @click="delete_item(index)"></span>
                      </div>
                  </div>
              </li>
          </transition-group>
      <input class="input-addItem" v-model="input_value" type="text" name="" value="">
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
            now_active: '',
            input_value: ''
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
            if(this.input_value !== '') {
                this.todolist.push({ name: this.input_value, check: false });
                this.input_value = '';
            }
        },
        delete_item(index) {
            this.todolist.splice(index, 1);
        },
        show_btn(index) {
            this.now_active = index;
        },
    }
}
</script>

<style lang="scss" scoped>

$main-color: #ECD2DF;
$second-color: #51788A;

.todolist {
    border: 1px solid;
    width: calc(100% - 300px);
    margin: 0 auto;
    padding: 30px 0;
    border-radius: 10px;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    position: absolute;
    left: 50%;
    background: $main-color;
    color: $second-color;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

h2.title {
    margin: 0;
}

h4 {
    margin: 0;
}

ul.list {
    list-style: none;
    padding: 0;
    min-height: 50px;


    &.__item {
        height: 100px;
        color: #000;
    }
}

li {
    margin: 5px;
    transition: 250ms ease-out;
}

div.list-content {
    display: inline-flex;
    align-items: center;
}

label.label-check {
    width: 20px;
    height: 20px;
    border: 2px solid $second-color;
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
    background: $second-color;
    transition: all 3s;

    &:after {
        position: absolute;
        content: '';
        width: 20px;
        border: 1px solid;
        background: $second-color;
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
    // border-bottom: 2px solid $second-color;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    background: transparent;
    color: $second-color;
    letter-spacing: 0.7px;
    padding: 5px;
    border-radius: 30px;
    width: 204px;
    font-size: 18px;

    &.checked {
        text-decoration: line-through;
    }
}

.input-addItem {
    border: none;
    border: 2px solid $second-color;
    outline: none;
    font-size: 16px;
    background: transparent;
    color: #fff;
    letter-spacing: 0.7px;
    padding: 5px 10px;
    border-radius: 30px;

}

.delete {
    position: relative;
    cursor: pointer;
}

.icon-delete {
    width: 15px;
    border: 1px solid;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 0px;
    left: -15px;
    background: $second-color;
    display: none;
    // transition: all 3s;

    &:after {
        position: absolute;
        content: '';
        width: 15px;
        border: 1px solid;
        background: $second-color;
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
    border: 2px solid $second-color;
    color: $second-color;
    background: transparent;
    padding: 10px 10px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 30px;
    transition: 1s;

    &:hover {
        background: $second-color;
        color: #fff;
    }
}

</style>
