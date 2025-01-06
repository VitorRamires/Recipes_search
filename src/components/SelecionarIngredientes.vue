<script lang="ts">
import { ObterDados } from "../http/http.ts";
import type ICategory from "../interfaces/ICategories.ts";
import CardCategory from "./CardCategory.vue";
import BotaoPesquisa from "./BotaoPesquisa.vue";

export default {
  data() {
    return {
      categorias: [] as ICategory[], //Type normal para dados externos
    };
  },
  async created() {
    this.categorias = await ObterDados();
  },
  components: { CardCategory, BotaoPesquisa },
  emits: ["adicionarIngrediente", "retirarIngrediente", "mudarExibicao"],
};
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você tem interesse:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <!--v-for === foreach -->
        <CardCategory
          :categoria="categoria"
          @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
          @retirar-ingrediente="$emit('retirarIngrediente', $event)"
        />
      </li>
    </ul>
  </section>
  <BotaoPesquisa
    @click="$emit('mudarExibicao', 'MostrarReceitas')"
    texto="Buscar receitas"
  />
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}


@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
