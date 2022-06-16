<template>
  <a-layout style="min-height: 100vh">
  <!-- 左边导航 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #f9f9f9; padding: 0" >
      <Bread :father="'活动管理'"></Bread>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        
        <div :style="{ padding: '24px', background: '#fff', minHeight: '80%' , margin:'20px' }">
        <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import Bread from '@/components/Bread.vue'
import { ref } from 'vue';
  let collapsed= ref<boolean>(false)
  let selectedKeys= ref<string[]>(['1'])
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
