<template>
  <v-form v-model="form">
    <v-text-field :loading="loading" label="请输入查询对象" v-model="keywords" clearable single-line color="primary"
      :rules="[rules.required]" variant="outlined" @keyup.enter="onClick">
      <template #prepend>
        <v-combobox v-model="type" :items="items" hide-details variant="outlined" class="w-30" color="primary" />
      </template>
      <template #append-inner>
        <v-btn density="comfortable" icon="mdi-magnify" @click.stop="onClick" />
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
    default:'全部'
  },
  keywords:{
    type:String,
    default:''
  }
})
const emit = defineEmits(['search'])

const items = ["全部", 'IMSI', '应用', '小程序', '网站']

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
