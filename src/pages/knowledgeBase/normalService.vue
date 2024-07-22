<template>
  <div class="app-container p-2.5">
    <el-card>
      <el-form :model="queryForm" inline>
        <el-form-item label="关键词：">
          <el-input v-model="queryForm.keyword"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select
            v-model="queryForm.type"
            style="width: 120px"
            placeholder="请选择">
            <el-option
              v-for="opt in typeOpts"
              :key="opt.value"
              :label="opt.label"
              :value="opt.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联属性：">
          <el-cascader
            v-model="queryForm.relatedAttrs"
            :options="relatedAttrsOpts"
            :show-all-levels="false"
            :props="relatedAttrsProps"
            filterable
            placeholder="请选择"
            style="width: 220px" />
        </el-form-item>
        <el-form-item label="建立时间：">
          <el-date-picker
            v-model="queryForm.createdTime"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            style="width: 260px"
          />
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
      <el-table :data="dataList">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="域名" prop="domain"></el-table-column>
        <el-table-column label="包名" prop="packageName"></el-table-column>
        <el-table-column label="开发厂商" prop="devCompany"></el-table-column>
        <el-table-column label="关联属性">
          <template #default="scope">
            <el-tag
              v-for="tag in scope.row.relatedAttrs"
              :key="tag"
              type="primary"
              >{{ tag }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="建立时间" prop="devCompany"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="editDrawer = true"><el-icon><Edit /></el-icon></el-button>
            <el-button><el-icon><Delete /></el-icon></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-drawer
      v-model="editDrawer"
      title="编辑网络服务"
      direction="rtl"
      size="50%"
    >
      <el-form :model="serviceForm" label-position="top">
        <el-row :gutter="30">
          <el-col :span="10">
            <el-form-item label="显示名称：">
              <el-input v-model="serviceForm.name"></el-input>
            </el-form-item>
            <el-form-item label="类型：">
              <el-radio-group v-model="serviceForm.type">
                <el-radio-button value="app">应用</el-radio-button>
                <el-radio-button value="web">网站</el-radio-button>
                <el-radio-button value="applet">小程序</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="域名：">
              <el-input v-model="serviceForm.domain"></el-input>
            </el-form-item>
            <el-form-item label="包名：">
              <el-input v-model="serviceForm.packageName"></el-input>
            </el-form-item>
            <el-form-item label="开发厂商：">
              <el-input v-model="serviceForm.devCompany"></el-input>
            </el-form-item>
            <el-form-item label="图标：">
              <el-upload
                class="app-uploader"
                action="###"
                :show-file-list="false"
              >
                <img v-if="serviceForm.imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="app-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item label="描述：">
              <el-input v-model="serviceForm.devCompany" type="textarea"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="关联属性：">
              <el-tag
                v-for="tag in serviceForm.relatedAttrs"
                :key="tag"
                type="primary"
                >{{ tag }}</el-tag>
              <el-input
                class="mb-2.5"
                v-model="relatedAttrsFilter"
                :suffix-icon="Search"
                style="width: 100%"></el-input>
              <el-cascader-panel
                v-model="serviceForm.relatedAttrs"
                :props="relatedAttrsProps"
                style="width: fit-content"
                :options="relatedAttrsOpts" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <div style="flex: auto">
          <el-button size="large">取消</el-button>
          <el-button size="large" type="primary">确认</el-button>
        </div>
      </template>
    </el-drawer>
    <el-drawer
      v-model="importDrawer"
      title="批量导入"
      direction="rtl"
      size="600px"
    >
      <el-form v-model="importForm" label-position="top">
        <el-form-item label="下载模板：">
          <el-button plain>下载模板</el-button>
          <el-link type="primary" class="ml-4">查看导入说明</el-link>
        </el-form-item>
        <el-form-item label="上传文件：">
          <el-upload
            drag
            action="###"
            :style="{ width: '100%' }"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="关联属性：">
          <el-cascader
            v-model="importForm.relatedAttrs"
            :options="relatedAttrsOpts"
            :show-all-levels="false"
            :props="relatedAttrsProps"
            filterable
            placeholder="请选择"
            :style="{ width: '100%' }" />
        </el-form-item>
      </el-form>
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
import {
  Delete,
  Edit,
  Search,
  Plus,
  UploadFilled
} from '@element-plus/icons-vue'
const queryForm = reactive({
  keyword: '',
  type: '',
  relatedAttrs: [],
  createdTime: ''
})

const serviceForm = reactive({
  name: '',
  type: '',
  domain: '',
  packageName: '',
  devCompany: '',
  imageUrl: '',
  desc: '',
  relatedAttrs: []
})

const importForm = reactive({
  fileList: {},
  relatedAttrs: ''
})

const relatedAttrsFilter = ref('')

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

const relatedAttrsOpts = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]

const relatedAttrsProps = {
  multiple: true,
  checkStrictly: true,
}

const onQuery = () => {
  console.log('query!')
}

const onReset = () => {
  console.log('reset!')
}

const dataList = [
  {
    name: '小象嗨TV',
    url: '###',
    type: '应用',
    domain: 'wiratoyotastock.com',
    packageName: 'com.lxsky.hitv',
    devCompany: '广西广电网络公司',
    relatedAttrs: ['兴趣爱好/影视'],
    createdTime: '2024-06-21 12:00:00'
  }, {
    name: '小象嗨TV',
    url: '###',
    type: '应用',
    domain: 'wiratoyotastock.com',
    packageName: 'com.lxsky.hitv',
    devCompany: '广西广电网络公司',
    relatedAttrs: ['兴趣爱好/影视'],
    createdTime: '2024-06-21 12:00:00'
  }, {
    name: '小象嗨TV',
    url: '###',
    type: '应用',
    domain: 'wiratoyotastock.com',
    packageName: 'com.lxsky.hitv',
    devCompany: '广西广电网络公司',
    relatedAttrs: ['兴趣爱好/影视'],
    createdTime: '2024-06-21 12:00:00'
  }
]

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
