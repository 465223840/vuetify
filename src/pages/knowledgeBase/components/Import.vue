<template>
  <el-form v-model="importForm" label-position="top">
    <el-form-item label="下载模板：">
      <el-button plain>下载模板</el-button>
      <el-link type="primary" class="ml-4">查看导入说明</el-link>
    </el-form-item>
    <el-form-item label="上传文件：">
      <el-upload drag action="###" :style="{ width: '100%' }">
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
      <RelatedAttrInput :relatedAttrs="importForm.relatedAttrs" />
    </el-form-item>
  </el-form>
</template>

<script setup>
import RelatedAttrInput from './RelatedAttr';
const importForm = reactive({
  fileList: {},
  relatedAttrs: []
})

</script>

<style lang="scss" scoped>
</style>
