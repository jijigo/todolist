<template>
  <div id="app">
    <todolist/>
  </div>
</template>

<script>
import todolist from './components/todolist'

export default {
  name: 'app',
  components: {
    todolist
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ECD2DF;
    background: #51788A;
    height: 100%;
    padding-top: 50px;
}
</style>
