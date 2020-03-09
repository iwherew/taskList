import Vue from 'vue'
import Router from 'vue-router'
import taskList from '@/components/taskList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: taskList
    }
  ]
})
