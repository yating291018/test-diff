<!-- -->
<template>
  <el-form :model="form" style="width:100%;">
    <el-table :data="form.tableList" style="width:100%" border>
      <el-table-column 
        v-for="(item, index) in form.tableHeader"
        :prop="item.value" 
        :label="item.value" 
        :key="index"
      >
        <template #default="scope">
          <el-form-item style="width:100%;" :prop="'tableList.' + index + '.' + item.value">
            <ElInput @update:modelValue="update($event, item.value, scope.$index)" @showForm="showForm" :keytable="item.value" :index="index"></ElInput>
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script lang='ts' setup>
  import { reactive, onBeforeMount } from 'vue'
  import ElInput from './ElInput.vue'

  interface TableType {
    date: string;
    name: string;
    state: string;
    city: string;
    address: string;
    zip: string;
  }

  interface FormType {
    tableHeader: {label: string; value: string}[];
    tableList: TableType[];
  }

  const form = reactive<FormType>({
    tableHeader: [
      {
        label: '日期',
        value: 'date'
      },
      {
        label: '名称',
        value: 'name'
      },
      {
        label: '状态',
        value: 'state'
      },
      {
        label: '城市',
        value: 'city'
      },
      {
        label: '地址',
        value: 'address'
      },
      {
        label: '压缩',
        value: 'zip'
      },
    ],
    tableList: []
  })

  onBeforeMount(() => {
    const list: TableType[] = []
    for (let i = 0; i < 500; i++) {
      list.push({
        date: '',
        name: '',
        state: '',
        city: '',
        address: '',
        zip: ''
      })
    }
    form.tableList = list
  })

  const showForm = () => {
    console.log(form.tableList)
  }

  const update = (value: string, key: string, index: number) => {
    console.log('key', value, key, index)
    // form.tableList[index][key] = value
  }
  

</script>
<style lang='scss' scoped></style>