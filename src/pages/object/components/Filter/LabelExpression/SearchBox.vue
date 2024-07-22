<template>
  <div class="relative">
    <h-input @blur="onBlur" @focus="onFocus" prefixIcon="mdi-magnify" @search="onClick"
      v-click-outside="{ handler: onBlur, include }" v-model="searchText" class="w-80">
      <template #searchBtn>
        <v-dialog max-width="60%" v-model="dialog">
          <template #activator="{ props: activatorProps }">
            <v-btn icon="mdi-magnify" variant="text" density="compact" v-bind="activatorProps" />
          </template>
          <LabelTree>
            <template #actions>
              <div class="mb-2  h-6 flex justify-between items-center">
                <span class="text-sm">
                  分析维度
                </span>
                <div class="flex gap-2">
                  <h-input prefixIcon="mdi-magnify" />
                  <v-btn color="primary" density="compact">加 入</v-btn>
                </div>
              </div>
            </template>
          </LabelTree>
        </v-dialog>
      </template>
    </h-input>

    <v-fade-transition>
      <LabelTree v-show="expand" class="absolute top-10 included" />
    </v-fade-transition>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps(['searchText'])
const emit = defineEmits(['update:searchText'])


// const searchText = computed(() => props.searchText)
const searchText = ref(props.searchText)


const dialog = ref(false)
const expand = ref(false)

const onBlur = () => expand.value = false
const onClick = () => dialog.value = true
const onFocus = () => expand.value = true

const include = () => {
  return [document.querySelector('.included')]
}
</script>
