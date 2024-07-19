<template>
  <v-form v-model="form" class="search-input-wrapper">
    <v-text-field :loading="loading" label="请输入查询对象" v-model="keywords" clearable single-line color="primary"
      :rules="[rules.required]" @keyup.enter="onClick">
      <template #prepend>
        <v-combobox v-model="type" :items="items" hide-details variant="outlined" color="primary" style="width: 120px"/>
      </template>
      <template #append-inner>
        <v-btn prepend-icon="mdi-magnify" @click.stop="onClick">搜索</v-btn>
      </template>
    </v-text-field>
  </v-form>
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
  .search-input-wrapper {
    height: 58px;
    border: 2px solid blue;
    border-radius: 4px;
    ::v-deep .v-field__outline {
      --v-field-border-width: 0;
    }
    ::v-deep .v-input--horizontal .v-input__prepend {
      margin-inline-end: 0;
      padding-top: 0;
    }
    ::v-deep .v-field__append-inner {
      padding-top: 6px;
    }
  }
</style>
