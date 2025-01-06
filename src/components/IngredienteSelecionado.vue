<script lang="ts">
import Tag from "../components/Tag.vue";

export default {
  components: {
    Tag,
  },
  props: {
    ingrediente: { type: String, required: true },
  },
  data() {
    return {
      selecionado: false,
    };
  },
  methods: {
    Clicar() {
      this.selecionado = !this.selecionado;
      if (this.selecionado) {
        this.$emit("adicionarIngrediente", this.ingrediente);
      } else {
        this.$emit("retirarIngrediente", this.ingrediente);
      }
    },
  },
  emits: ['adicionarIngrediente', 'retirarIngrediente'],
};
</script>


<template>
  <button @:click="Clicar" :aria-pressed="selecionado">
    <!--@ === v-on -->
    <Tag :texto="ingrediente" :ativarBG="selecionado" />
  </button>
</template>
