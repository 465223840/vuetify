<template>
  <div class="border bg-[#F5FAFA]">
    <div class="flex gap-2 p-3 border-b-2">
      <v-autocomplete :loading="loading" prepend-inner-icon="mdi-magnify" density="compact" label="请输入关键词..."
        variant="solo" hide-details single-line max-width="340" v-model="searchText" clearable menu-icon="" :items=items
        @keyup.enter="onEnter">
        <template #append>
          <v-btn icon="mdi-globe-model" tile density="compact" variant="text" color="primary" v-bind="props">
            <v-icon icon="mdi-globe-model" />
            <v-menu activator="parent" :close-on-content-click="false">
              <LabelTree />
            </v-menu>
          </v-btn>
        </template>
      </v-autocomplete>

      <div class="flex gap-2 items-center">
        <draggable class="dragArea list-group" :list="cacheTags" group="tags" @change="log" itemKey="text">
          <template #item="{ element, index }">
            <transition name="fade">
              <h-tag :count="element.count" :key="index">
                {{ element.text }}
              </h-tag>
            </transition>
          </template>
        </draggable>
      </div>
    </div>

    <div class="p-3 relative">
      <div class="flex flex-wrap mr-20">
        <LabelOperator />
        <div class="mx-4">|</div>
        <div class="flex gap-2 items-center">
          <draggable class="dragArea list-group" :list="calcTags" group="tags" @change="log" itemKey="text">
            <template #item="{ element, index }">
              <transition name="fade">
                <h-tag :count="element.count" :key="index">
                  {{ element.text }}
                </h-tag>
              </transition>
            </template>
          </draggable>
        </div>
      </div>
      <div class="absolute right-2 top-2">
        <v-btn size="small">清空</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable';

import LabelOperator from './LabelOperator.vue';

const loading = ref(false)
const searchText = ref('')


const props = defineProps({
  calcTags: {
    type: Array,
    default: () => []
  },
  cacheTags: {
    type: Array,
    default: () => []
  },

});

const onEnter = () => {
  console.log(123)
}

const label_tree = [
  {
    title: '标签1', value: 1, children: [
      { title: '标签1-1', value: 11 }
    ]
  },
  { title: '标签1', value: 1, },
]

const items = computed(() => flattenTags(label_tree))

const flattenTags = (data, parentTitle = '') => {
  const result = [];
  data.forEach(item => {
    const currentTitle = parentTitle ? `${parentTitle}-${item.title}` : item.title;
    if (item.children && item.children.length > 0) {
      result.push(...flattenTags(item.children, currentTitle));
    } else {
      result.push(currentTitle);
    }
  });
  return result;
}


const log = (evt) => {
  console.log(evt);
};
</script>

<style scoped>
.dragArea {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

:deep(.v-field__input) {
  /* min-height: auto; */
}
</style>
