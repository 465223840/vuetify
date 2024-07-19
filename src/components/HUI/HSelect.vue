<template>
  <div class="dropdown">
    <button @click="toggleDropdown">
      <v-icon icon="mdi-history" />
      <span class="label"> {{ selectedOption }}</span>
      <span class="icon" :class="isOpen ? 'open' : 'close'">&#9662;</span>
    </button>
    <transition name="dropdown">
      <ul v-if="isOpen" class="dropdown-menu" v-click-outside="() => isOpen = false">
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const options = ref(['Option 1', 'Option 2', 'Option 3']);
const selectedOption = ref('Select');
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
.dropdown {
  height: 100%;
  position: relative;
  display: inline-block;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;

  .label {
    font-size: 12px;
  }

  button {
    padding: 4px;
    background-color: #F0EFF1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100px;
    height: 26px;
    border-radius: 3px;

    &:hover {
      background-color: #e5e5e5;
    }

  }
}

.icon {
  font-size: 24px;
  /* margin-left: 8px; */
  transition: transform 0.3s ease;
}

.icon.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  z-index: 1;

  & li {
    padding: 2px;
    height: 32px;
    line-height: 32px;
    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }
}



.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  /* transform: translateY(-10px); */
}
</style>
