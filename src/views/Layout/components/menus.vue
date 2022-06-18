<template>
    <a-menu id="dddddd" v-model:openKeys="openKeys"  :theme="'dark'" mode="inline">
        <template v-for="item in routerList" :key="item.children[0].name">
            <template v-if='item.children.length === 1'>
                <a-menu-item :key="item.children[0].name">
                    <template #icon>
                        <dashboard-outlined />
                    </template>
                    {{ item.meta.title }}
                </a-menu-item>
            </template>
            <template v-else>
                <a-sub-menu :key="item.children[0].name">
                    <template #icon>
                        <MailOutlined />
                    </template>
                    <template #title>{{ item.meta.title }}</template>
                    <a-menu-item-group :key="item1.name" v-for="item1 in item.children">
                        <template #icon>
                            <QqOutlined />
                        </template>
                        <template #title></template>
                        <a-menu-item :key="item1.name">{{ item1.meta.title }}</a-menu-item>
                    </a-menu-item-group>
                </a-sub-menu>
            </template>
        </template>
    </a-menu>
</template>
 
<script lang='ts' setup>
import { ref, reactive, watch } from 'vue'
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined ,DashboardOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { message } from 'ant-design-vue'
import { Layoutstore } from '@/state/Layout'
import *as LayoutD from '@/dts/Layout.D'
const layout = Layoutstore()
const openKeys = ref<string[]>([]);
watch(
    () => openKeys,
    val => {
        console.log('openKeys', val);
    })
let routerList = ref<Array<LayoutD.IrouterList>>([])
const getRouters = async () => {
    try {
        const res = await layout.getRouters()
        // console.log(res);
        routerList.value = res.data.data
        layout.SetrouterList(routerList.value)
        // console.log(routerList.value );
    } catch (error) {
        if (error instanceof Error) {
            message.error(error.message)
        }
    }
}
getRouters()
</script>
 
<style scoped>
</style>