<template>
  <el-input
    v-model="keywords"
    placeholder="请输入搜索关键词..."
    class="search-input"
    clearable
    :rules="[rules.required]"
    @keyup.enter="onClick"
  >
    <template #prepend>
      <el-select
        v-model="type"
        placeholder="Select"
        style="width: 100px">
        <el-option
          v-for="opt in items"
          :key="opt"
          :label="opt"
          :value="opt" />
      </el-select>
    </template>
    <template #append>
      <el-button
        @click.stop="onClick">
        <el-icon class="mr-1.5"><Search /></el-icon>
        搜索
      </el-button>
    </template>
  </el-input>
</template>

<script setup >
const props = defineProps({
  loading:{
    type:Boolean,
    default:false
  },
  type:{
    type:String,
    default: 'IMSI'
  },
  keywords:{
    type:String,
    default:''
  }
})
const emit = defineEmits(['search'])

const items = ['IMSI', '应用', '小程序', '网站']

const form = ref(false)
const type = ref(props.type)
const keywords = ref(props.keywords)

const rules = {
  required: (value) => {
    if (type.value == 'IMSI') {
      const reg = /^\d{14,16}$/;
      return reg.test(value) || '请输入有效IMSI'
    }
    return !!value || '请输入搜索关键字'
  }
}

const onClick = () => {
  if (!form.value) return
  emit('search',type.value,keywords.value)
}
</script>

<style lang="scss" scoped>
  $primary: #406fc9;
  $primary-hover: #2f6adc;
  $main: #000033;
  $placeholder: #616b7a;
  .search-input {
    height: 58px;
    border: 1px solid $primary;
    border-radius: 4px;
    :deep(.el-input__wrapper) {
      font-size: 16px;
      box-shadow: none;
    }
    :deep(.el-input-group__prepend),
    :deep(.el-input-group__append) {
      font-size: 16px;
      background: #fff;
      box-shadow: none;
    }
    :deep(.el-input__inner),
    :deep(.el-select__placeholder) {
      color: $main;
      &::placeholder {
        color: $placeholder;
      }
    }
    :deep(.el-button) {
      display: flex;
      align-items: center;
      height: 44px;
      width: 110px;
      color: #fff;
      background: $primary;
      margin-right: -12px;
      &:hover {
        color: #fff;
        background-color: $primary-hover;
      }
    }
    .el-input-group__prepend .el-select :deep(.el-select__wrapper) {
      height: 56px;
      font-size: 16px;
      background: #fff;
      box-shadow: none;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 15px;
        bottom: 15px;
        width: 1px;
        background-color: #d4d8dd;
      }
    }
  }
</style>
