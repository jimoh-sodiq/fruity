<script lang="ts" setup>
const emit = defineEmits(["closeModal"]);
</script>

<template>
  <teleport to="body">
    <div
      class="w-full h-full z-50 flex items-center justify-center fixed top-0 left-0 overflow-y-scroll bg-[rgba(0,0,0,0.3)] p-8 pt-20"
      @click.self="emit('closeModal')"
    >
      <slot></slot>
    </div>
  </teleport>
</template>
