<template >
  <a-config-provider :locale="zhCN">
    <a-form :model="formState" name="horizontal_login" layout="inline" autocomplete="off" @finish="onFinish"
      ref="formRef" @finishFailed="onFinishFailed" hideRequiredMark>

      <a-form-item label="线索id" name="id" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.id">

        </a-input>
      </a-form-item>

      <a-form-item label="手机号" name="phone" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.phone">

        </a-input>
      </a-form-item>

      <a-form-item label="线索归属" name="owner">
        <a-input v-model:value="formState.owner">

        </a-input>
      </a-form-item>
      <a-form-item label="创建时间" name="createTime">
        <a-range-picker v-model:value="value1"  
         @change="getRangeTime"
        />
      </a-form-item>
      <template v-if="props.activeKey === '1'">
        <a-form-item name="statusselect" label="线索状态" has-feedback>
          <a-select v-model:value="formState.status" placeholder="Please select a country">
            <a-select-option value="1">待跟进</a-select-option>
            <a-select-option value="2">已跟进</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item name="channelselect" label="渠道来源" has-feedback>
          <a-select v-model:value="formState.channel" placeholder="Please select a country">
            <a-select-option value="0">线上活动</a-select-option>
            <a-select-option value="1">推广介绍</a-select-option>
          </a-select>
        </a-form-item>
      </template>
      <a-row style='margin-top:60px'>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit" @click ='getClueList()'>搜索</a-button>
          <a-button style="margin: 0 8px" @click="() => {formRef?.resetFields()}">清除</a-button>
        </a-col>
      </a-row>

    </a-form>
  </a-config-provider>
</template>

 
<script lang='ts' setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref, reactive } from 'vue'
import type { Dayjs } from 'dayjs';
import  dayjs from 'dayjs'
import 'dayjs/locale/zh-cn';
import type { FormInstance } from 'ant-design-vue';
import {ClueStore}  from '@/state/clue'
import * as ClueD from '@/dts/clue.D'

const Clue = ClueStore()
type RangeValue = [Dayjs, Dayjs];


const props = defineProps({
  activeKey: {
    type: String,

  },
})
const formRef = ref<FormInstance>();
let value1 = ref<RangeValue>()
let formState = ref({
  id: 0,
  phone: 0,
  owner: "",
  status: "" as string | number,
  channel: "" as string | number,
  value: value1
})

let getlistparams = ref<any>({
  pageNum: 1,
  pageSize: 10,
  
})


 let params:ClueD.params ={
       beginCreateTime:`` ,
       endCreateTime:``
}
const getRangeTime = (val:any) =>{
        console.log(val);
        params.beginCreateTime=val[0]?dayjs(val[0].$d).format('YYYY-MM-DD'):''
        params.endCreateTime=val[1]?dayjs(val[1].$d).format('YYYY-MM-DD'):''
      }

const getClueList = async () =>{
  try {
    getlistparams.value.beginCreateTime = params.beginCreateTime
    getlistparams.value.endCreateTime = params.endCreateTime

    const res = await Clue.getClueList(getlistparams)
    console.log(res);
    await Clue.setClueList(res)
  } catch (error) {
    if(error instanceof Error){
      console.log(error.message)
    }
  }
}

getClueList()
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>
 
<style scoped>
:deep(.ant-form-item) {
  width: 350px !important;
  margin-top: 12px;

}
</style>