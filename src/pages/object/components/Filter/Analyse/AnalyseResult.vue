<template>
  <v-row class="min-h-14">
    <v-col>
      <div class="flex gap-2">
        <div v-for="item in hidden_list" class="text-sm bg-[#D2DAEE]  px-3 py-1 rounded-sm">
          <span class="mr-4"> {{ item.title }}</span>
          <a href="#" @click="restoreItem(item)">
            <v-icon icon="mdi-arrow-top-right-bottom-left" class="text-sm " />
          </a>
        </div>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="item in show_list" :key="item" cols="4" sm="12" lg="4" xl="3" xxl="2">

      <h-card :title="item.title" class="transition-all duration-300 ease-in-out hover:shadow-xl">
        <template #btns>
          <h-select :options="options" v-model:value="item.type" icon="mdi-history" />
          <v-btn icon="mdi-window-minimize" density="compact" variant="text" class="text-xs"
            @click="minimizeItem(item)" />

          <v-dialog width="60%">
            <template #activator="{ props: activatorProps }">
              <v-btn icon="mdi-window-maximize" v-bind="activatorProps" density="compact" variant="text"
                class="text-xs" />
            </template>
            <v-card class="h-96" :title="item.title">
              <component :is="componentId(item.type)" :data="item.data" :xAxisData="item.xAxisData"
                :legendData="item.legendData" :seriesData="item.seriesData" />
            </v-card>
          </v-dialog>

          <v-btn icon="mdi-close" density="compact" variant="text" class="text-xs" @click="closeItem(item)" />
        </template>
        <component :is="componentId(item.type)" :data="item.data" :xAxisData="item.xAxisData"
          :legendData="item.legendData" :seriesData="item.seriesData" />
      </h-card>
    </v-col>
  </v-row>
</template>

<script setup>
import bar from '@/components/EChart/Bar.vue';
import pie from '@/components/EChart/Pie.vue';

const props = defineProps(['list'])



const show_list = ref(props.list)
const hidden_list = ref([])

const minimizeItem = (item) => {
  show_list.value = show_list.value.filter(i => i.id !== item.id);
  hidden_list.value.push(item);
}
const restoreItem = (item) => {
  hidden_list.value = hidden_list.value.filter(i => i.id !== item.id);
  show_list.value.push(item);
}

const closeItem = (item) => {
  show_list.value = show_list.value.filter(i => i.id !== item.id);
}

const options = [
  { label: '柱状图', value: 'bar' },
  { label: '饼图', value: 'pie' }
]

const componentId = (type) => {
  switch (type) {
    case 'bar':
      return bar;
    case 'pie':
      return pie;
    default:
      return bar;
  }
}


</script>
