<template>
  <div class="full-h-page">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-card>
          <LabelType />
        </el-card>
      </el-col>
      <el-col :span="19">
        <el-card>
          <el-row justify="space-between">
            <span>工作状态</span>
            <div>
              <el-button type="primary" @click="add(scope.row)">新建标签</el-button>
              <el-button type="primary" plain>导入标签</el-button>
              <el-button type="primary" plain>导出标签</el-button>
            </div>
          </el-row>
        </el-card>
        <el-card>
          <el-form :model="queryForm" inline label-width="0">
            <el-form-item style="margin-right: 15px; width: 100px">
              <el-select v-model="queryForm.type" placeholder="实体对象" style="width: 100%">
                <el-option
                  v-for="opt in typeOpts"
                  :key="opt.value"
                  :label="opt.name"
                  :value="opt.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-right: 15px; width: 100px">
              <el-select v-model="queryForm.labelType" placeholder="标签类型" style="width: 100%">
                <el-option
                  v-for="opt in labelOpts"
                  :key="opt.value"
                  :label="opt.name"
                  :value="opt.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-right: 15px; width: 100px">
              <el-select v-model="queryForm.permission" placeholder="公开类型" style="width: 100%">
                <el-option
                  v-for="opt in permissionOpts"
                  :key="opt.value"
                  :label="opt.name"
                  :value="opt.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-right: 15px; width: 100px">
              <el-select v-model="queryForm.status" placeholder="状态" style="width: 100%">
                <el-option
                  v-for="opt in statusOpts"
                  :key="opt.value"
                  :label="opt.name"
                  :value="opt.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-right: 15px; width: 200px">
              <el-input v-model="queryForm.value" placeholder="请输入搜索内容"></el-input>
            </el-form-item>
            <el-form-item style="margin-right: 15px; width: 250px">
              <el-date-picker
                v-model="queryForm.daterange"
                type="daterange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              />
            </el-form-item>
            <el-form-item style="margin-right: 0">
              <el-button type="primary">查询</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="dataList">
            <el-table-column type="selection" width="40px"></el-table-column>
            <el-table-column label="名称" prop="name"></el-table-column>
            <el-table-column label="实体对象" prop="type"></el-table-column>
            <el-table-column label="标签类型" prop="label_type"></el-table-column>
            <el-table-column label="属性状态" prop="attr_status"></el-table-column>
            <el-table-column label="公开类型" prop="permission"></el-table-column>
            <el-table-column label="覆盖IMSI数">
              <template #default="scope">
                <el-link type="primary">{{ scope.row.coverage_imsi_count }}</el-link>
              </template>
            </el-table-column>
            <el-table-column label="覆盖率" prop="coverage_rate"></el-table-column>
            <el-table-column label="创建者" prop="creator"></el-table-column>
            <el-table-column label="创建时间" prop="created_date"></el-table-column>
            <el-table-column label="操作" width="160px">
              <template #default="scope">
                <el-tooltip
                  effect="dark"
                  content="详情"
                  placement="top"
                >
                  <el-button
                    class="btn-icon"
                    type="primary"
                    text
                    @click="detail(scope.row)">
                    <el-icon><InfoFilled /></el-icon>
                  </el-button>
                </el-tooltip>
                <el-tooltip
                  effect="dark"
                  content="编辑"
                  placement="top"
                >
                  <el-button
                    class="btn-icon"
                    type="primary"
                    text
                    @click="edit(scope.row)">
                    <el-icon><Edit /></el-icon>
                  </el-button>
                </el-tooltip>
                <el-tooltip
                  v-if="!scope.row.status"
                  effect="dark"
                  content="启用"
                  placement="top"
                >
                  <el-button
                    class="btn-icon"
                    type="primary"
                    text>
                    <el-icon><VideoPlay /></el-icon>
                  </el-button>
                </el-tooltip>
                <el-tooltip
                  v-if="scope.row.status"
                  effect="dark"
                  content="停用"
                  placement="top"
                >
                  <el-button
                    class="btn-icon"
                    type="primary"
                    text>
                    <el-icon><videoPause /></el-icon>
                  </el-button>
                </el-tooltip>
                <el-dropdown>
                  <el-button
                    class="btn-icon"
                    type="primary"
                    text>
                    <el-icon><MoreFilled /></el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>删除</el-dropdown-item>
                      <el-dropdown-item>运行结果</el-dropdown-item>
                      <el-dropdown-item>转为公开</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- 新建标签 -->
    <el-drawer
      v-model="addLabelDrawer"
      :title="addLabelTitle + '标签'"
      direction="rtl"
      size="800px"
    >
      <AddLabel />
      <template #footer>
        <div style="flex: auto">
          <el-button size="large">取消</el-button>
          <el-button size="large" type="primary">新建</el-button>
        </div>
      </template>
    </el-drawer>
    <!-- 标签详情 -->
    <el-drawer
      v-model="labelDetailDrawer"
      :title="labelDetailTitle"
      direction="rtl"
      size="1000px"
    >
      <LabelDetail />
      <template #footer>
        <div style="flex: auto">
          <el-button size="large">取消</el-button>
          <el-button size="large" type="primary">新建</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import LabelType from '../components/LabelType.vue';
import AddLabel from '../components/AddLabel.vue';
import LabelDetail from '../components/LabelDetail.vue';

const addLabelDrawer = ref(false)
const addLabelTitle = ref('新建')
const labelDetailDrawer = ref(false)
const labelDetailTitle = ref('')

//
const queryForm = reactive({
  type: '',
  labelType: '',
  permission: '',
  status: '',
  value: '',
  daterange: []
})

const typeOpts = [
  {
    name: '实体对象',
    value: '1'
  }, {
    name: 'IMSI',
    value: '2'
  }, {
    name: '手机号',
    value: '3'
  }
]
const labelOpts = [
  {
    name: '全部标签',
    value: '1'
  }, {
    name: '枚举标签',
    value: '2'
  }, {
    name: '规则标签',
    value: '3'
  }, {
    name: '组合标签',
    value: '4'
  }
]
const permissionOpts = [
  {
    name: '全部',
    value: '1'
  }, {
    name: '个人',
    value: '2'
  }, {
    name: '公开',
    value: '3'
  }
]
const statusOpts = [
  {
    name: '全部',
    value: '1'
  }, {
    name: '已启用',
    value: '2'
  }, {
    name: '已停用',
    value: '3'
  }, {
    name: '待审批(个人转全局)',
    value: '3'
  }
]

const dataList = [
  {
    name: '在职',
    type: 'IMSI',
    label_type: '枚举标签',
    status: false,
    attr_status: '已启用',
    permission: '全局',
    coverage_imsi_count: 1278,
    coverage_rate: '12%',
    creator: 'admin',
    created_date: '2024-06-21 13:28:00'
  }, {
    name: '全职',
    type: 'IMSI',
    label_type: '规则标签',
    status: true,
    attr_status: '已停用',
    permission: '全局',
    coverage_imsi_count: 1278,
    coverage_rate: '12%',
    creator: 'admin',
    created_date: '2024-06-21 13:28:00'
  }, {
    name: '全职',
    type: '手机号',
    label_type: '规则标签',
    status: true,
    attr_status: '已停用',
    permission: '全局',
    coverage_imsi_count: 1278,
    coverage_rate: '12%',
    creator: 'admin',
    created_date: '2024-06-21 13:28:00'
  }
]

// 新建
const add = () => {
  addLabelDrawer.value = true
  addLabelTitle.value = '新建'
}

// 编辑
const edit = (row) => {
  addLabelDrawer.value = true
  addLabelTitle.value = '编辑'
}

// 详情
const detail = (row) => {
  console.log(row)
  labelDetailDrawer.value = true
  labelDetailTitle.value = row.name
}

</script>

<style scoped>

</style>
