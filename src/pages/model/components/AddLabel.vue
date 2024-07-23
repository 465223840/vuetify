<template>
  <el-form :model="form" label-width="90px">
    <el-divider content-position="left"><b>基础标签</b></el-divider>
    <el-row :gutter="30">
      <el-col :span="15">
        <el-form-item label="标签名称：">
          <el-input v-model="form.label_name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="9">
        <el-form-item label="实体对象：">
          <el-select v-model="form.object">
            <el-option
              v-for="opt in objectOpts"
              :key="opt.label"
              :label="opt.label"
              :value="opt.value"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="标签描述：">
      <el-input v-model="form.label_desc"></el-input>
    </el-form-item>
    <el-divider content-position="left"><b>标签规则</b></el-divider>
    <el-form-item label="标签类型：" class="mb-0">
      <el-radio-group v-model="form.label_type">
        <el-radio label="规则标签" value="rule"></el-radio>
        <el-radio label="组合标签" value="group"></el-radio>
        <el-radio label="枚举标签" value="enumeration"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-radio-group v-model="label_set">
        <el-radio-button label="可视化" value="structure"></el-radio-button>
        <el-radio-button label="自定义SQL" value="custom_sql"></el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="时间范围：">
      <el-input v-model="form.range_value" style="width: 100px"></el-input>
      <el-select v-model="form.range_unit" style="width: 100px; margin-left: 10px">
        <el-option label="天" value="day"></el-option>
        <el-option label="月" value="month"></el-option>
      </el-select>
    </el-form-item>
    <el-divider content-position="left"><b>任务配置</b></el-divider>
    <el-form-item label="更新方式：">
      <el-radio-group v-model="form.update_type">
        <el-radio label="一次性" value="once"></el-radio>
        <el-radio label="周期" value="cycle"></el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup>
const label_set = ref('structure')
const form = reactive({
  label_name: '',
  object: '',
  label_desc: '',
  label_type: '',
  structure: [],
  custom_sql: '',
  range_value: '',
  range_unit: '',
  update_type: 'once'
})

const objectOpts = [
  {
    label: '实体对象',
    value: '1'
  }, {
    label: 'IMSI',
    value: '2'
  }, {
    label: '手机号',
    value: '3'
  }
]

</script>

<style lang="scss" scoped></style>
