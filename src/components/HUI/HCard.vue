<template>
  <div class="simple-card">
    <div class="title">
      <div>{{ title }}</div>
      <div class="btns">
        <h-select />
        <!-- <slot name='btn' /> -->
        <!-- <v-select class="compact-select" density="compact" variant="solo-filled" :items="['饼图', '柱状图']" /> -->
      </div>
    </div>

    <div class="body">
      {{ value }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },

})


const options = ref(['Option 1', 'Option 2', 'Option 3']);
const selectedOption = ref('Select an option');
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.simple-card {
  // padding: 8px;
  min-height: 100px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border: 1px solid #D4D5D6;
  border-radius: 3px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 24px 12px;
    height: 42px;
    line-height: 42px;
    font-size: 20px;
    background-color: #F3F5F6;
    border-bottom: 1px solid #D4DADE;
  }

  .btns {
    display: flex;
    gap: 2px;
    align-items: center;
  }

  .body {
    min-height: 220px;
  }
}
</style>
