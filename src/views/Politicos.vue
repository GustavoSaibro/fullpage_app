<template>
  <div class="politicos">
    <!-- <div class="titulo">
      <h1>Politicos no exercicio</h1>
    </div> -->
    <Titulo>
      <h1>Pagina de Politicos</h1>
    </Titulo>
    <Busca />

    <div class="grid-container">
      <Politico class="item-1" />
      <Politico class="item-2" />
      <Politico class="item-3" />
      <Politico class="item-4" />
      <Politico class="item-5" />
      <Politico class="item-6" />
      <Politico class="item-7" />
      <Politico class="item-8" />
      <Politico class="item-9" />
    </div>
  </div>
</template>

<script>
import Politico from "@/components/politicos/Politico.vue"
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
export default {
  name: "Politicos",
  components: {
    Politico,
    Busca,
    Titulo,
  }
}
</script>

<style scoped lang="scss">
.titulo {
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
}
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