<template>
  <div class="d-flex justify-space-around">
    <v-date-picker show-adjacent-months />


  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>
