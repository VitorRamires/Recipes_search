<script lang="ts">
import SelecionarIngredientes from "../components/SelecionarIngredientes.vue";
import Receitas from "./Receitas.vue";
import SuaLista from "./SuaLista.vue";

type Pagina = "MostrarIngredientes" | "MostrarReceitas";

export default {
  data() {
    return {
      ingredientes: [] as string[],
      exibirConteudo: "MostrarIngredientes" as Pagina,
    };
  },
  components: {
    SuaLista,
    SelecionarIngredientes,
    Receitas,
  },
  methods: {
    retirarIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(
        (ingredienteItem) => ingredienteItem !== ingrediente
      );
    },
    adicionarIngredientes(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },
    mudarExibicao(painel: string) {
      if (painel === "MostrarReceitas") {
        this.exibirConteudo = "MostrarReceitas";
      } else {
        this.exibirConteudo = "MostrarIngredientes";
      }
    },
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <SuaLista :ingredientes="ingredientes" />
    </section>

    <!--Mantem o estado funcionando mesmo apos a troca entre de exibição dos componentes-->
    <KeepAlive>
      <SelecionarIngredientes
        v-if="exibirConteudo === 'MostrarIngredientes'"
        @adicionar-ingrediente="adicionarIngredientes($event)"
        @retirar-ingrediente="retirarIngrediente($event)"
        @mudar-exibicao="mudarExibicao($event)"
      />
    </KeepAlive>

    <Receitas
      v-if="exibirConteudo === 'MostrarReceitas'"
      @mudar-exibicao="mudarExibicao($event)"
      :ingredientes="ingredientes"
    />
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
