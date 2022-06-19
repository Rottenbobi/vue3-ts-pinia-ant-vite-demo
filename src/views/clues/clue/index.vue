<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="线索">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="线索池" force-render>Content of Tab Pane 2</a-tab-pane>

  </a-tabs>
</template>
 
<script lang='ts' setup>
import { ref,reactive } from 'vue'
let activeKey = ref('1')
</script>
 
<style scoped>

</style>