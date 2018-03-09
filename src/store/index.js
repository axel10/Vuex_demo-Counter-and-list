import Vue from "vue"
import Vuex from 'vuex'
import cover from './modules/cover'

Vue.use(Vuex);    //务必在new Vuex.Store之前use一下

export default new Vuex.Store({

  modules:{
    cover         //注册cover数据模型
  },

  state:{
    count:0       //计数器的count
  },
  mutations:{
    increment(state){
      state.count++
    }
  }
})
