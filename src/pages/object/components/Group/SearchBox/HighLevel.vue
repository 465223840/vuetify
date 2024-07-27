<template>
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
</template>

<script setup>
const props = defineProps({
  form: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped></style>
