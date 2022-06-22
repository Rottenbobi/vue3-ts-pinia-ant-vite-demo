<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="线索">
      <Search :activeKey="activeKey"></Search>
      <Key1table></Key1table>
    </a-tab-pane>
    <a-tab-pane key="2" tab="线索池" force-render>
      <Search :activeKey="activeKey"></Search>
      <Table></Table>
    </a-tab-pane>



  </a-tabs>
</template>
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import Search from './components/search.vue'
import Key1table from './components/key1table.vue'
import Table from './components/table.vue'
let activeKey = ref('1')


</script>
 
<style scoped>
</style>