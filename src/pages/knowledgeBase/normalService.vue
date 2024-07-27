<template>
  <div class="app-container p-2.5">
    <el-card>
      <el-form :model="queryForm" inline>
        <el-form-item label="关键词：">
          <el-input v-model="queryForm.keyword"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select v-model="queryForm.type" style="width: 120px" placeholder="请选择">
            <el-option v-for="opt in typeOpts" :key="opt.value" :label="opt.label" :value="opt.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联属性：">
          <relatedAttrInput :relatedAttrs="queryForm.relatedAttrs" />
        </el-form-item>
        <el-form-item label="建立时间：">
          <el-date-picker v-model="queryForm.createdTime" type="daterange" start-placeholder="开始时间"
            end-placeholder="结束时间" style="width: 260px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onQuery">查询</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="m-2.5">
      <el-button type="primary" @click="editDrawer = true">新建</el-button>
      <el-button type="primary" plain @click="importDrawer = true">批量导入</el-button>
      <el-button type="primary" plain>批量导出</el-button>
      <el-button type="danger" plain>删除</el-button>
    </div>
    <el-card>
      <ServiceTable />
    </el-card>
    <EditService v-model:value="editDrawer"/>
    {{editDrawer}}
    <!-- <el-drawer v-model="editDrawer" title="编辑网络服务" direction="rtl" size="50%">
      <EditService />
      <template #footer>
        <div style="flex: auto">
          <el-button size="large">取消</el-button>
          <el-button size="large" type="primary">确认</el-button>
        </div>
      </template>
    </el-drawer> -->
    <el-drawer v-model="importDrawer" title="批量导入" direction="rtl" size="600px">
      <Import />
      <template #footer>
        <div style="flex: auto">
          <el-button size="large">取消</el-button>
          <el-button size="large" type="primary">导入文件</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import relatedAttrInput from './components/RelatedAttr'
import ServiceTable from './components/ServiceTable'
import EditService from './components/EditService'
import Import from './components/Import'
const queryForm = reactive({
  keyword: '',
  type: '',
  relatedAttrs: [],
  createdTime: ''
})

const typeOpts = ref([
  {
    label: '全部',
    value: '1'
  }, {
    label: '网站',
    value: '2'
  }, {
    label: '应用',
    value: '3'
  }, {
    label: '小程序',
    value: '4'
  }
])

const onQuery = () => {
  console.log('query!')
}

const onReset = () => {
  console.log('reset!')
}

const editDrawer = ref(false)
const importDrawer = ref(false)

</script>

<style scoped>
.app-uploader .avatar {
  width: 60px;
  height: 60px;
  display: block;
}
</style>

<style>
.app-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.app-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.app-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  text-align: center;
}
</style>
