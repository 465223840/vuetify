<template>
  <img :src="img(type)" alt="" class="mr-2" />
</template>

<script setup>
import andImg from '@/assets/images/与.png';
import orImg from '@/assets/images/或.png';
import notImg from '@/assets/images/非.png';

const props = defineProps(['type'])

const img = (type) => {
  switch (type) {
    case '1':
      return andImg;
    case '2':
      return orImg;
    case '3':
      return notImg;
    default:
      return andImg;
  }
};

</script>
