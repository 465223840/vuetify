<template>
  <div class="border bg-[#F5FAFA]">
    <div class="flex gap-2 p-2 border-b-2">
     <!-- <div>
       <h-input prefixIcon="mdi-magnify" suffixIcon="mdi-magnify" :value="searchText" placeholder="请输入关键词..."
        class="w-120" @input="updateSearchText($event)" />
       
     </div> -->
     <SearchBox v-model:searchText="searchText"/>
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
      <!-- <h-select class="ml-auto"></h-select> -->
    </div>
    <div class="p-2 min-h-10 relative">
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
        <v-btn size="small" @click="clearTags">清空</v-btn>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import SearchBox from './SearchBox.vue';

import LabelOperator from './LabelOperator.vue';

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

const searchText = ref('')


const clearTags = () => {
  emit('update:searchText', '');
};

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
</style>
