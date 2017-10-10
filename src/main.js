// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.localStorage.set('todolist_data', 123)
Vue.localStorage.get('todolist_data')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },

    localStorage: {
        todolist_data: {
            type: Object,
            default: {
                // hello: 'world'
            }
        },
    },
})
