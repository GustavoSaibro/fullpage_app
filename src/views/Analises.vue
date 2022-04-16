<template>
  <Titulo>
    <h1>Pagina de Analises</h1>
  </Titulo>
  <Busca />
  <div class="grid-container">
    <Analise class="item-1" />
    <Analise class="item-2" />
    <Analise class="item-3" />
    <Analise class="item-4" />
    <Analise class="item-5" />
    <Analise class="item-6" />
  </div>
</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import Analise from "@/components/analises/Analise.vue"
export default {
  name: "Analises",
  components: {
    Titulo,
    Busca,
    Analise
  }

}
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.8em 1.2em;

  .grid-item {
    border: 4px solid #000000;
  }
  .item-1 {
    grid-column: 1/2;
    grid-row: 1;
  }
  .item-2 {
    grid-column: 2/3;
    grid-row: 1;
  }
  .item-3 {
    grid-column: 1/2;
    grid-row: 2;
  }
  .item-4 {
    grid-column: 2/3;
    grid-row: 2;
  }
  .item-5 {
    grid-column: 1/2;
    grid-row: 3;
  }
  .item-6 {
    grid-column: 2/3;
    grid-row: 3;
  }
}
</style>