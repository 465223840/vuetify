<template>
  <div class="dropdown">
    <button @click="toggleDropdown">
      <v-icon :icon="icon" />
      <div class="label"> {{ display }}</div>
      <div class="icon" :class="isOpen ? 'open' : 'close'">&#9662;</div>
    </button>
    <transition name="dropdown">
      <ul v-if="isOpen" class="dropdown-menu" v-click-outside="() => isOpen = false">
        <li v-for="option in options" :key="option" @click="selectOption(option.value)">
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(
  {
    options: {
      type: Array,
      default: []
    },
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
  }
)
const emit = defineEmits(['update:value', 'select'])
const display = computed(() => {
  const val = props.options.find(option => option.value === props.value)?.label || '';
  return val
})

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  emit('update:value', option);
  emit('select', option);

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
  border-radius: 4px;
  background-image: linear-gradient(180deg, #F3F5F8, #d6d6d6);
  // background-color: #fff;
  // width: 100%

  .label {
    margin: 0 4px;
    font-size: 12px;
  }

  button {
    padding: 4px;
    // background-color: #F0EFF1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 26px;

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
