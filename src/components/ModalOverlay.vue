<script lang="ts">
export default {
  props: {
    title: { type: String }
  }
}
</script>

<template>
  <v-overlay>
    <v-card class="pa-2">
      <template v-slot:title>{{ title }}</template>
      <slot name="modal-content"></slot>
    </v-card>
  </v-overlay>
</template>
