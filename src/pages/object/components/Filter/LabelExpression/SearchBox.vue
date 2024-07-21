<template>
  <div class="relative">
    <h-input @blur="onBlur" @focus="onFocus" prefixIcon="mdi-magnify" suffixIcon="mdi-magnify" placeholder="请输入关键词..."
      class="w-120" @input="updateSearchText" @search="onClick" v-click-outside="{
        handler: onBlur,
        include
      }" />
    <v-dialog max-width="60%" v-model="dialog">
      <LabelTree class="absolute top-10 included" />
    </v-dialog>

    <v-expand-transition>
      <LabelTree v-show="expand" class="absolute top-10 included" />
    </v-expand-transition>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps(['searchText'])
const emit = defineEmits(['update:searchText'])


const searchText = computed(() => props.searchText)

const updateSearchText = (value) => {
  console.log(searchText.value)
  emit('update:searchText', value);
};
const dialog = ref(false)
const expand = ref(true)

const onBlur = () => {
  expand.value = false
}
const onClick = () => {
  // expand.value = true
  console.log(1)
  dialog.value = true
}
const onFocus = () => {
  expand.value = true
  console.log(123)
}

const include = () => {
  return [document.querySelector('.included')]
}
</script>
