<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
    ativarBG: Boolean
  },
};
</script>

<template>
  <span class="tag" :class="{ ativa: ativarBG }"> <!-- classe Dinamica. Caso ativarBG true ==== ativa existe -->
    {{ texto }}
  </span>
</template>


<style scoped>

.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background-color: var(--cinza-claro);
  font-weight: 400;
}

.tag.ativa{
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}

</style>