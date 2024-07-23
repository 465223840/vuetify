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

    <div>
      <v-btn density="comfortable" icon="mdi-poll" size="small" tile :color="toggle == '0' ? 'primary' : ''"
        :active="toggle == '0'" @click="emit('update:toggle', '0')" />

      <v-btn density="comfortable" icon="mdi-poll" size="small" tile :color="toggle == '1' ? 'primary' : ''"
        :active="toggle == '1'" @click="emit('update:toggle', '1')" />
    </div>


  </div>
</template>

<script setup>
// const toggle = ref(0)

const props = defineProps(['toggle'])



const emit = defineEmits(['update:toggle'])
// watch(toggle, (val) => {
//   emit('update:toggle', val)
// })
const toggle = computed(() => props.toggle)

</script>

<style lang="scss" scoped></style>
