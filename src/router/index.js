import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/components/Events'
import AddEvent from '@/components/AddEvent'
import EditEvent from '@/components/EditEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Events',
      component: Events
    },
    {
      path: '/add_event',
      name: 'AddEvent',
      component: AddEvent
    },
    {
      path: '/edit_event',
      name: 'EditEvent',
      component: EditEvent
    }
  ]
})
