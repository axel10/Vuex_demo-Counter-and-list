<template>
  <div class="list">
    <ul>
      <li v-for="cover in covers" @click="removeCover(cover)">
        {{cover.title}}
      </li>
    </ul>
    <p>
      {{covers}}
    </p>
    <h2>请尝试点击li。</h2>
    <router-link to="/num">计数器demo</router-link>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  computed:mapGetters({
    covers:"allCover"      //利用module的getter获得数据
  }),

  methods:mapActions([
    'removeCover'       //利用module的action删除数据
  ]),

  created(){
    this.$store.dispatch('getAllCover')    //调用cover数据模型的getAllCover action 用来初始化列表数据。
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    text-align: left;
  }
</style>
