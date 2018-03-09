<template>
  <div>
    <input type="button" value="+" @click="incr" />
    <input type="text" id="input" v-model="count"/>
    <input type="button" value="-"/>
    <br/>
    <router-link to="/list">列表demo</router-link>
  </div>
</template>

<script>
  import store from '../store'
  export default {

    computed:{
      count:{
        get:function () {
          return store.state.count
        },
        set:function (val) {
          store.state.count = val
        }
      }
    },

    methods:{
      incr(){
        // store.commit("increment")
        store.commit("increment")    //触发修改
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
