<template>
  <div>
    <div class="bg-white border p-2">
      <v-row justify="space-between">
        <v-col cols="6">
          <v-sheet class="pa-2 ma-2">
            <div class="w-full flex items-center gap-2">
              <h-input prefixIcon="mdi-magnify" v-model="search" class="w-full" />
              <h-button @click="panel = !panel" type="link">高级</h-button>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet class="pa-2 ma-2">
            <div class="flex justify-end gap-2">
              <h-button type="primary" size="large" class="w-36">查 询</h-button>
              <h-button size="large" class="w-36">重置</h-button>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <div v-show="panel">
        <el-form :model="form" label-width="100px">
          <el-row :gutter="96">
            <el-col :span="6">
              <el-form-item label="群体名称">
                <el-input v-model="form.name" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="群体来源">
                <el-input v-model="form.email" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="群体类型">
                <el-input v-model="form.phone" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="96">
            <el-col :span="6">
              <el-form-item label="群组标签">
                <el-input v-model="form.address" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="创建人">
                <el-input v-model="form.city" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="mt-4 flex gap-4 items-center">
      <el-badge :value="tableData2.length">
        <h-button icon="mdi-cart-outline" @click="drawer2 = true">组合库</h-button>
      </el-badge>
      <v-dialog v-model="dialog" max-width="400">
        <template #activator="{ props: activatorProps }">
          <h-button icon='mdi-file-export-outline' v-bind="activatorProps">导入文件</h-button>
        </template>
        <h-card title="导入文件">
          <h-input></h-input>
        </h-card>
      </v-dialog>
    </div>

    <div class="mt-4">
      <GroupTable :data="tableData" @operation="operation" />
    </div>

    <el-drawer v-model="drawer2" title="组合库" direction="rtl" size="600px">
      <CombinationLib :data="tableData2" @removeItem="removeItem" />
      <template #footer>
        <h-button type="primary" class="w-full" size="large">开始分析</h-button>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import GroupTable from './components/Group/GroupTable.vue'
import CombinationLib from './components/Group/CombinationLib.vue'
const router = useRouter()

const search = ref('')
const dialog = ref(false)
const panel = ref(false)
const drawer2 = ref(false)

const operation = (type, row, index) => {
  switch
  (type) {
    case 'name':
      navigateTo(row)
    case 'detail':
      navigateTo(row)
      break;
    case 'edit':
      navigateTo(row)
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


const copyToTarget = (index) => {
  const itemToCopy = tableData.value[index];
  const copiedItem = JSON.parse(JSON.stringify(itemToCopy));
  tableData2.value.push(copiedItem);
};

const navigateTo = (row) => {
  router.push(`/object/filter?group=${row.name1}`)
}

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
})


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
