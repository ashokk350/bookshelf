import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/books/Index'
import NewBook from '@/components/books/New'
import EditBook from '@/components/books/Edit'
import ShowBook from '@/components/books/Show'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList,
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/books/edit',
      name: 'EditBook',
      component: EditBook,
      props: true
    },
    {
      path: '/books/show',
      name: 'ShowBook',
      component: ShowBook,
      props: true
    }
  ],
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.isLoggedIn) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if (store.getters.isLoggedIn) {
//       next({
//         path: '/',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
