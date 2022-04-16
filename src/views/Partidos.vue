<template>
  <div class="partidos">
    <Titulo>
      <h1>Pagina de Partidos</h1>
    </Titulo>

    <Busca />
    <div class="grid-container">
      <Partido class="item-1" />
      <Partido class="item-2" />
      <Partido class="item-3" />
      <Partido class="item-4" />
      <Partido class="item-5" />
      <Partido class="item-6" />
      <Partido class="item-7" />
      <Partido class="item-8" />
      <Partido class="item-9" />
    </div>

  </div>

</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import Partido from "@/components/partidos/Partido.vue"
export default {
  name: "Partidos",
  components: {
    Busca,
    Titulo,
    Partido
  }
}
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
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
    grid-column: 3/4;
    grid-row: 1;
  }
  .item-4 {
    grid-column: 1/2;
    grid-row: 2;
  }
  .item-5 {
    grid-column: 2/3;
    grid-row: 2;
  }
  .item-6 {
    grid-column: 3/4;
    grid-row: 2;
  }
  .item-7 {
    grid-column: 1/2;
    grid-row: 3;
  }
  .item-8 {
    grid-column: 2/3;
    grid-row: 3;
  }
  .item-8 {
    grid-column: 3/4;
    grid-row: 3;
  }
}
</style>