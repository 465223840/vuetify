<template>
  <div class="dropdown">
    <button @click="toggleDropdown">
      <v-icon icon="mdi-history"></v-icon>

      <span> {{ selectedOption }}</span>
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

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  font-size: 14px;

}

.dropdown button {
  padding: 2px;
  background-color: #F0EFF1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 30px;
  /* font-size: 13px; */
  border-radius: 3px;


}

.dropdown button:hover {
  background-color: #e5e5e5;
}

.icon {
  font-size: 32px;
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
}

.dropdown-menu li {
  padding: 8px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
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
