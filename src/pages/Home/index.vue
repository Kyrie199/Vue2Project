<template>
<div>
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="(floorItem,index) in floorList" :key="floorItem.id" :floor="floorItem"></Floor>
  <Brand></Brand>
</div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

import {mapState} from 'vuex'
export default {
  name: "index",
  components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
  mounted() {
    this.$store.dispatch('getFloorList');
  },
  computed:{
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style scoped>

</style>