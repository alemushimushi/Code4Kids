//import { store } from 'quasar/wrappers'
//import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

//export default store(function (/* { ssrContext } */) {
//  const Store = createStore({
//    modules: {
      // example
//    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
//    strict: process.env.DEBUGGING
//  })

//  return Store
//})

import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

//import showcase from './showcase'

import firebase from 'firebase/app'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({

    /*
    state: {
      usuario: '',
      error: '',
    },

    mutations: {
      setUsuario (state, usuario) {
        state.usuario = usuario
      },
      setError (state, error) {
        state.error = error;
      }
    },

    actions: {
      crearUsuario({commit} , usuario) {
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          let usuarioNuevo = {
            email: res.user.email,
            uid: res.user.uid
          };
          commit('setUsuario', usuarioNuevo);
        }).catch((err) => {
          console.log(err);
          commit('setError', err.code);
        })
      }
    },  
    */

    /*
    state: {
      usuario: '',
      error: ''
    },

    mutations: {
      setUsuario(state, usuario){
        state.usuario = usuario
      },
      setError(state, error){
        state.error = error
      }
    },

    actions: {
      crearUsuario({commit}, usuario) {
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
          .then((res) => {
            console.log(res);
            let usuarioNuevo = {
              email: res.user.email,
              uid: res.user.uid
            }
            commit('setUsuario', usuarioNuevo);
          }).catch((err) => {
            console.log(err);
            commit('setError', err.code);
          })
      }
    },
    */

    modules: {
      //showcase
    },

    strict: process.env.DEBUGGING
  })

  return Store
})