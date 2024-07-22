<template>
  <div class="flex gap-2">
    <div>
      <el-date-picker v-model="value2" type="daterange" :shortcuts="shortcuts" size="small">
        <div>123</div>
      </el-date-picker>
      <v-btn density="comfortable" icon="$vuetify" size="small" />
    </div>
    <div>
      <v-btn density="comfortable" icon="$vuetify" size="small" />
      <v-btn density="comfortable" icon="$vuetify" size="small" />
    </div>
    <div>
      <v-btn density="comfortable" icon="$vuetify" size="small" />
      <v-btn density="comfortable" icon="$vuetify" size="small" />
    </div>
  </div>
</template>

<script setup>
const value2 = ref('')
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
