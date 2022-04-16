<template>
  <div class="partidos">
    <Titulo>
      <h1>Pagina de Partidos</h1>
    </Titulo>

    <Busca />
    <div class="grid-container">
      <PartidoCard class="item-1" />
      <PartidoCard class="item-2" />
      <PartidoCard class="item-3" />
      <PartidoCard class="item-4" />
      <PartidoCard class="item-5" />
      <PartidoCard class="item-6" />
      <PartidoCard class="item-7" />
      <PartidoCard class="item-8" />
      <PartidoCard class="item-9" />
    </div>

  </div>

</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import PartidoCard from "@/components/partidos/PartidoCard.vue"
export default {
  name: "Partidos",
  components: {
    Busca,
    Titulo,
    PartidoCard
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