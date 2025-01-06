<script lang="ts">
import { ObterReceitas } from "../http/http";
import type IReceitas from "../interfaces/ICategories.ts";
import CardReceitas from "./CardReceitas.vue";
import BotaoPesquisa from "./BotaoPesquisa.vue";
import type { PropType } from "vue";

export default {
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true },
  },
  data() {
    return {
      receitasFiltradas: [] as IReceitas[],
    };
  },
  async created() {
    const receitas = await ObterReceitas();

    this.receitasFiltradas = receitas.filter((receita) => {
      return receita.ingredientes.every((ingrediente) =>
        this.ingredientes.includes(ingrediente)
      );
    });
  },

  components: {
    CardReceitas,
    BotaoPesquisa,
  },
  emits: ["mudarExibicao"],
};
</script>

<template>
  <div class="receitas-header">
    <h1 class="cabecalho titulo">Receitas</h1>
    <p>Resultados encontrados: {{ receitasFiltradas.length }}</p>
    <p v-if="receitasFiltradas.length">
      Veja as opções de receitas encontradas
    </p>
    <p v-else>Não encontramos nada, vamos tentar novamente?</p>
  </div>
  <div>
    <ul v-if="receitasFiltradas.length" class="receitas">
      <li v-for="receita in receitasFiltradas" :key="receita.nome">
        <CardReceitas :receita="receita" />
      </li>
    </ul>
    <img
      v-else
      src="/src/assets/images/sem-receitas.png"
      alt="Icone que mostra que não há receitas disponiveis"
    />
  </div>

  <BotaoPesquisa
    @click="$emit('mudarExibicao', 'MostrarIngredientes')"
    texto="Ver ingredientes"
  />
</template>

<style scoped>
.receitas-header {
  text-align: center;
}

.receitas {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>
