<template>
  <div>
    <span>
      已选{{rowSelection.rowKeylength}}条
    </span>
    <a-table :columns="columns" :data-source="Clue.cluelist" :row-selection="rowSelection"
      :row-class-name="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)"
      rowKey='id'
      >
      <template #bodyCell="{ column, record }">
        <!-- {{column}}  格子信息 -->
        <!-- {{record}}   该行信息   -->

        <template v-if="column.dataIndex === 'ownerTime'">
          <p v-if="record.status === '1'">
            {{ record.address }}
          </p>
        </template>
        <!--  -->
        <template v-else-if="column.key === 'action'">
          <span>
            <a-button size="small" type="link"> 查看 </a-button>
            <a-button size="small" v-if="record.status === '1'" type="link"> 跟进 </a-button>
            <a-button size="small" type="link"> 分配 </a-button>
          </span>
        </template>

      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { ClueStore } from '@/state/clue'
import * as clueD from '@/dts/clue.D'
import type { TableProps, TableColumnType } from 'ant-design-vue';

const Clue = ClueStore()
type Key = string | number;


const columns = [

  {
    title: '线索ID',
    dataIndex: 'id',

  },
  {
    title: '手机号',
    dataIndex: 'phone',

  },
  {
    title: '渠道来源',
    dataIndex: 'channel',
    customRender: (text: any) => {
      return text.value == '0' ? '线上活动' : '推广介绍'
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: (a: clueD.IclueList1, b: clueD.IclueList1) => {
      let atime = (new Date(a.createTime)).getTime()
      let btime = (new Date(b.createTime)).getTime()
      return atime - btime
    }
  },
  {
    title: '归属人',
    dataIndex: 'owner',
  },
  {
    title: '渠道来源',
    dataIndex: 'status',
    customRender: (text: any) => {
      return text.value == '1' ? '待跟进' : '已跟进'
    },
    filters: [
      {
        text: '待跟进',
        value: '1',
      },
      {
        text: '已跟进',
        value: '2',
      },],                                                   
      onFilter: (value: string, record: clueD.IclueList1) => record.status.indexOf(value) === 0,
  },
  {
    title: '下次跟进时间',
    dataIndex: 'ownerTime',
    sorter: (a: clueD.IclueList1, b: clueD.IclueList1) => {
      let atime = (new Date(a.ownerTime)).getTime()
      let btime = (new Date(b.ownerTime)).getTime()
      return atime - btime
    }
  },
  {
    title: '操作',
    key: 'action',
    align: 'center'
  },

];

const rowSelection = {
  rowKeylength:ref(0),
  onChange: (selectedRowKeys: string[], selectedRows: clueD.IclueList1[]) => {
    rowSelection.rowKeylength.value= selectedRowKeys.length
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  // getCheckboxProps: (record: clueD.IclueList1) => ({
  //   // disabled: record.name === 'Disabled User', // Column configuration not to be checked
   
  // }),
};

</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>