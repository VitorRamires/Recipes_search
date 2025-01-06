<script>
export default {
  props: {
    texto: String,
  },
};
</script>

<template>
  <button class="buscar-btn">{{ texto }}</button>
</template>

<style scoped>
.buscar-btn {
  width: 200px;
  padding: 15px 0;
  max-width: 100%;
  color: #fff;
  border-radius: 15px;
  background-color: #f0633c;
  cursor: pointer;
}
</style>
