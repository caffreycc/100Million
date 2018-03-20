import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mx_index from '@/components/mx_index'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  //  异步加载，只有当路由跳转到当前路由下时，才会加载页面。
  //   降低移动端负担
  routes: [
      {
      path: '/',
      name: 'login',
      component: function (resolve) {
      require(['@/components/login.vue'], resolve)
      }
    },{
      path: '/mx_index',
      name: 'mx_index',
      component: function (resolve) {
	require(['@/components/mx_index.vue'], resolve)
      }
    },{
      path: '/hello',
      name: 'HelloWorld',
      component: function (resolve) {
	require(['@/components/HelloWorld.vue'], resolve)
      }
    }
  ]
})
