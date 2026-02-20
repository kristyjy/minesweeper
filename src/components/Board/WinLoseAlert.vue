<script setup>

defineProps({
  win: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <h2 :class="['heading', {win, lose: !win}]">
    {{ win ? 'You Win!' : 'You Lose!' }}
  </h2>
</template>

<style scoped>
.heading {
  background-color: rgba(255,255,255,.2);
  font-family: var(--font-heading), cursive;
  font-weight: normal;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  text-shadow:
    -4px -4px 0 var(--dark),
     4px -4px 0 var(--dark),
    -4px  4px 0 var(--dark),
     4px  4px 0 var(--dark);
}

.win {
  color: var(--yellow-green);
}

.lose {
  color: var(--vibrant-coral);
}
</style>