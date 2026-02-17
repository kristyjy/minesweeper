<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="cell-button"
    :disabled="disabled"
    @click.right.prevent="$emit('rightClick')"
    @click.left.prevent="$emit('leftClick')"
  >
    <slot />
  </button>
</template>

<style scoped>
.cell-button {
  background: var(--light);
  border: none;
  color: var(--vibrant-coral);
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.cell-button:hover {
  background: var(--mid);
}

</style>
