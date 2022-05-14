import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../pages/user-list.vue'
import UserDetail from '../pages/user-detail.vue'
import Chat from '../pages/chat.vue'
import MessageList from '../pages/message-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Online_Dating_App',
    name: 'user-list',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'user-detail',
    component: UserDetail
  },
  {
    path: '/user/:id/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/message-list',
    name: 'message-list',
    component: MessageList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
