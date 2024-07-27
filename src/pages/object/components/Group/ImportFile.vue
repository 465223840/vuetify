<template>
  <h-card title="导入文件">
    <div class="px-16 h-48 flex justify-center items-center">
      <div class="flex flex-col  items-center gap-2" v-if="step == 1">
        <h-upload @change="fileChange" @error="onError" type="file" class="w-48" size="large">
          选择文件上传
        </h-upload>
        <h-button type="link" size="large">文件模板</h-button>
        <span class="text-xs text-gray-500">只能上传xls/xlsx格式文件，单个文件不能超过500kb</span>
      </div>
      <el-form :model="form" class="w-full" v-if="step == 2">
        <el-form-item label="群组标签">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="群组标签">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button type="primary" class='w-2/5' @click="save">确定</el-button>
          <el-button class='w-2/5' @click="$emit('cancel')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </h-card>
</template>

<script setup>
const emit = defineEmits(['save', 'cancel'])

const step = ref(1)
const files = ref([])

const fileChange = (val) => {
  files.value = val
  step.value = 2
}
const onError = (msg) => {
  console.log(msg)
}


const form = ref({
  name: '',
  email: '',
})

const save = () => {
  emit('save', {
    formData: form.value,
    files: files.value
  })
}


</script>

<style lang="scss" scoped></style>
