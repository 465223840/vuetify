<template>
  <div>
    <SearchBox />
    <div class="mt-4 flex gap-4 items-center">
      <v-badge color="error" :content="tableData2.length">
        <h-button icon="mdi-cart-outline" @click="drawer2 = true">组合库（去重）</h-button>
      </v-badge>
      <v-dialog v-model="dialog" max-width="600">
        <template #activator="{ props: activatorProps }">
          <h-button icon='mdi-file-export-outline' v-bind="activatorProps">导入文件</h-button>
        </template>
        <ImportFile @save="importFile" @cancel="dialog = false" />
      </v-dialog>
    </div>

    <div class="mt-4">
      <GroupTable :data="tableData" @operation="operation" />
    </div>

    <el-drawer v-model="drawer2" title="组合库" direction="rtl" size="600px">
      <CombinationLib :data="tableData2" @removeItem="removeItem" v-model:multipleSelection="multipleSelection" />
      <template #footer>
        <h-button type="primary" class="w-full" size="large" @click="analyse">开始分析</h-button>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import SearchBox from './components/Group/SearchBox/index.vue'

import GroupTable from './components/Group/GroupTable.vue'
import CombinationLib from './components/Group/CombinationLib.vue'
import ImportFile from './components/Group/ImportFile.vue';
const router = useRouter()

const multipleSelection = ref([])

const dialog = ref(false)

const drawer2 = ref(false)

const importFile = ({ formData, files }) => {
  console.log(formData, files)
  dialog.value = false
}

const operation = (type, row, index) => {
  switch (type) {
    case 'name':
      navigateTo(row, 0)
      break;
    case 'detail':
      navigateTo(row, 1)
      break;
    case 'edit':
      navigateTo(row, 1)
      break;
    case 'remove':
      console.log(type)
      break;
    case 'open':
      console.log(type)
      break;
    case 'copy':
      copyToTarget(index)
      break;
    default:
      break;
  }

}

const analyse = () => {
  if (multipleSelection.value.length == 0) return
  drawer2.value = false
  console.log(multipleSelection.value)
}


const copyToTarget = (index) => {
  const itemToCopy = tableData.value[index];
  const copiedItem = JSON.parse(JSON.stringify(itemToCopy));
  tableData2.value.push(copiedItem);
};

const navigateTo = (row, toggle) => {
  router.push(`/object/filter?group=${row.name1}&toggle=${toggle}`)
}

const removeItem = (index) => tableData2.value.splice(index, 1);

const tableData2 = ref([])
const tableData = ref([
  {
    name1: '2016-05-03',
    name2: 'Tom',
    name3: 'No. 189,',
  },
  {
    name1: '2016-05-02',
    name2: 'Tom',
    name3: 'No. 189,',
  },
  {
    name1: '2016-05-04',
    name2: 'Tom',
    name3: 'No. 189,',
  },
  {
    name1: '2016-05-01',
    name2: 'Tom',
    name3: 'No. 189,',
  },
])


</script>
