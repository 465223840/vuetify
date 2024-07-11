<template>
  <!-- //如果需要选择完数值后自动关闭日期框 需要将close-on-content-click 设置为true -->
  <!-- <v-locale-provider> -->
  <v-menu :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <v-text-field v-model="formatDate" v-bind="props" readonly variant="outlined"
        append-inner-icon="mdi-calendar-month-outline" :label="label" hide-details single-line color="primary" />
    </template>
    <v-date-picker v-model="datetime" hide-header landscape />
  </v-menu>
  <!-- </v-locale-provider> -->
</template>
<script setup>
import { ref, watch } from 'vue'
import Dayjs from 'dayjs';

const props = defineProps(['modelValue', 'label'])
const emit = defineEmits(['update:modelValue'])

const formatDate = ref(props.modelValue)
// datepicker初始格式 Thu Nov 09 2023 00:00:00 GMT+0800 (中国标准时间)
const datetime = ref()
// 转义成YYYY-MM-DD


watch(datetime, () => {
  //转换时间格式
  formatDate.value = Dayjs(datetime.value).format("YYYY-MM-DD")
  console.log(formatDate.value)
  emit('update:modelValue', formatDate.value)
})

</script>
