<template>
  <div class="flex gap-2">
    <!-- 日期选择 -->
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn icon="mdi-clock-time-eight-outline" density="compact" tile v-bind="props" class="text-xs" />
      </template>
      <div class="mt-2  p-3 shadow-xl border bg-white ">
        <div class="mb-2 flex justify-between">
          <span>时间范围</span>
          <v-btn density="compact" color="primary">确定</v-btn>
        </div>
        <v-btn-toggle v-model="toggle" variant="outlined" density="compact" color="primary">
          <v-btn density="compact" size="small">前一天</v-btn>
          <v-btn density="compact" size="small">前三天</v-btn>
          <v-btn density="compact" size="small">前一周</v-btn>
          <v-btn density="compact" size="small">自定义</v-btn>
          <!-- <CustomDatePicker /> -->
          date
        </v-btn-toggle>
      </div>
    </v-menu>

    <!-- 分析维度 -->
    <v-btn density="comfortable" icon="mdi-globe-model" size="small" tile class="mr-4 text-xs">
      <v-icon />
      <v-menu :close-on-content-click="false" activator="parent">
        <LabelTree />
      </v-menu>
    </v-btn>


    <!--  -->
    <v-btn density="comfortable" icon="mdi-play-circle-outline" size="small" tile />
    <v-btn density="comfortable" icon="mdi-file-export" size="small" tile class="mr-4" />
    <v-btn density="comfortable" icon="mdi-tray-arrow-down" size="small" tile />
    <v-btn-toggle v-model="toggle" variant="outlined" color="primary">
      <v-btn density="comfortable" icon="mdi-poll" size="small" tile />
      <v-btn density="comfortable" icon="mdi-format-list-bulleted" size="small" tile />
    </v-btn-toggle>
    <!-- {{ toggle }} -->
  </div>
</template>

<script setup>
import CustomDatePicker from '../../CustomDatePicker'
const value2 = ref('')
const toggle = ref(1)
const shortcuts = [
  {
    text: '近3天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
      return [start, end]
    },
  },
  {
    text: '近7天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '近30天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
]
</script>

<style lang="scss" scoped></style>
