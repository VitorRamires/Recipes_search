<script lang="ts">
import type { PropType } from "vue";
import type IReceitas from "../interfaces/IReceitas";

export default {
  props: {
    receita: { type: Object as PropType<IReceitas>, required: true },
  },
};
</script>

<template>
  <div class="card-receita">
    <img :src="`/imagens/receitas/${receita.imagem}`" alt="" />
    <p>{{ receita.nome }}</p>
  </div>
</template>

<style scoped>

  img{
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  .card-receita{
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    
  }

  .card-receita p{
    display: block;
    width: 100%;
    background-color: #ffffff;
    padding:30px 10px;
    border-radius: 0 0 5px 5px;
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 0 5px 5px 2px rgba(160, 160, 160, 0.418);
  }
</style>
