<template>
  <div class=" border bg-[#F5FAFA]">
    <div class="flex gap-2 p-2 border-b-2">
      <h-input prefixIcon="mdi-magnify" suffixIcon="mdi-magnify" :value="searchText" placeholder="请输入关键词..."
        class="w-120" />
      <div class="flex gap-2 items-center">
        <h-tag :count="tag.count" v-for="tag in cacheTags" :key="tag.text">
          {{ tag.text }}
        </h-tag>
      </div>
      <h-select class="ml-auto"></h-select>
    </div>
    <div class="p-2 min-h-10 relative">
      <div class="flex flex-wrap mr-20">
        <LabelOperator />
        <div class="mx-4">|</div>
        <div class="flex gap-2 items-center">
          <h-tag :count="tag.count" v-for="tag in calcTags" :key="tag.text">
            {{ tag.text }}
          </h-tag>
        </div>
      </div>
      <div class="absolute right-2 top-2">
        <v-btn size="small">清空</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import LabelOperator from './LabelOperator.vue';

const props = defineProps({
  calcTags: {
    type: Array,
    default: []
  },
  cacheTags: {
    type: Array,
    default: []
  },
  searchText: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:searchText']);
</script>

<style lang="scss" scoped></style>
