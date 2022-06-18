<template>
    <a-layout style="min-height: 100vh">
        <!-- 左边导航 -->
        <a-layout-sider v-model:collapsed="collapsed">
            <Menus></Menus>
            <footer class="ant-layout-sider-footer">
                <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"></a-avatar>
                <span>&nbsp;&nbsp;{{ userInfo.nickName }}</span>
                <span>&nbsp;&nbsp;|</span>
                <span>&nbsp;&nbsp;
                    <logout-outlined @click="showModal" />
                </span>
            </footer>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="display:flex;  align-items:center; background: #f9f9f9; padding: 0">
                <column-width-outlined @click="collapsed = !collapsed" class="bian" />
                <Bread :father="'活动管理'"></Bread>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">

                <div :style="{ padding: '24px', background: '#fff', minHeight: '80%', margin: '20px' }">
                    <router-view></router-view>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
    <!-- 确认框 -->
    <a-modal v-model:visible="visible" title="不友情提示" @ok="handleOk">
        <p>确认关闭吗</p>
    </a-modal>
</template>
<script lang="ts" setup>
import {
    ColumnWidthOutlined,
    LogoutOutlined
} from '@ant-design/icons-vue';
import Bread from '@/components/Bread.vue'
import { ref } from 'vue';
import { Layoutstore } from '@/state/Layout'
import { message } from 'ant-design-vue'
import Menus from './components/menus.vue'
import * as layoutD from '@/dts/Layout.D'
import {useRouter} from 'vue-router'
const router = useRouter()
let collapsed = ref<boolean>(false)

const layout = Layoutstore()
let userInfo = ref<layoutD.Iuser>({
    nickName: '',
})

const getUserInfo = async () => {
    try {
        const res = await layout.getUserInfo()
        // console.log(res);
        userInfo.value = res.data.user
    } catch (error) {
        if (error instanceof Error) {
            message.error(error.message)
        }
    }
}
getUserInfo()
const goout = () => {
    localStorage.removeItem('CRMtoken')
    router.push('/login')
}
const visible = ref<boolean>(false);

const showModal = () => {
    visible.value = true;
};

const handleOk = () => {
    goout()
    visible.value = false;
};
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

.bian {
    margin-left: 15px;
}

.ant-layout-sider-children {
    position: relative
}

.ant-layout-sider-footer {
    position: absolute;
    bottom: 15px;
    color: white;
    padding: 8px;
}
</style>
