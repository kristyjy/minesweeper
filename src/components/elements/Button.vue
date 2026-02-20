<script setup>

defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <button
    :class="['btn', variant]"
    @click.prevent="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border: 2px solid var(--dark);
  color: var(--light);
  background-color: var(--steel-blue);
  padding: 12px 24px;
  border-radius: 2px;
  text-transform: uppercase;
  position: relative;
  margin: 0;
  display: block;
  transition: background-color ease .4s;
  cursor: pointer;
}

.secondary {
  background-color: var(--vibrant-coral);
}

.tertiary {
  background-color: var(--dusty-grape);
}

.btn:hover {
  background-color: var(--dark);
}
</style>