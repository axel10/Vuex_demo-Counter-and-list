import cover from '../../api/cover'

const state = {
  all:[]
};

const getters={
  allCover:state=>state.all   //getter用来提供访问接口
};

const actions = {
  getAllCover({commit}){
    cover.getCover(covers=>{
      commit('setCover',covers)       //触发setCover修改。
    })
  },
  removeCover({commit},cover){
    commit('removeCover',cover)
  }
};

const mutations = {   //mutations用来修改state。
  setCover(state,covers){
    state.all = covers
  },
  removeCover(state,cover){
    console.log(cover.id);
    state.all = state.all.filter(function (OCover) {
      return OCover.id !== cover.id
    })
  }
};

export default {
  state,getters,actions,mutations
}
