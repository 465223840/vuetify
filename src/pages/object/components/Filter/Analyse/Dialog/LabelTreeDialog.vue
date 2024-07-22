<template>
  <v-dialog max-width="60%">
    <template #activator="{ props: activatorProps }">
      <slot v-bind="activatorProps" name="default" />
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

<script setup>

</script>

<style lang="scss" scoped></style>
