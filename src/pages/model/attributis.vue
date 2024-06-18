<template>
  <div class="bg-#F4F6F9 h-full">
    <v-card title="乒乓小子" subtitle="一款App" rounded="0" />

    <div class="p-8">
      <div class="flex gap-4">
        <v-card class="mx-auto" prepend-icon="mdi-map" subtitle="关联关系">
          <template v-slot:title>
            <span class="font-weight-black">Welcome to Vuetify</span>
          </template>
          <v-card-text class="bg-surface-light pt-4">
            1
          </v-card-text>
        </v-card>

        <v-card class="mx-auto" prepend-icon="mdi-phone" subtitle="基本信息">
          <template v-slot:title>
            <span class="font-weight-black">Welcome to Vuetify</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            2
          </v-card-text>
        </v-card>

      </div>

    </div>
  </div>


</template>

<script setup>

</script>

<style lang=" scss" scoped></style>
