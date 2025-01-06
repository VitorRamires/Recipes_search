<script lang="ts">
import Tag from "./Tag.vue";
import type { PropType } from "vue";

export default {
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true }
  },
  components: {
    Tag,
  },
};
</script>

<template>
  <div class="menu-choose-content">
    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <!-- v-if / v-else (devem estar proximos ao outro)-->
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <Tag :texto="ingrediente" ativarBG />
      </li>
    </ul>
    <p v-else class="paragrafo lista-vazia">
      <img
        src="../assets/images/icones/lista-vazia.svg"
        alt="Ícone de pesquisa"
      />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </div>
</template>

<style scoped>
.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}
</style>
