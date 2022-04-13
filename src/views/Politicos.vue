<template>
  <div class="busca-container">
    <div class="busca">
      Campo de busca
    </div>
    <div class="filtro">
      filtro
    </div>
  </div>
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
</template>

<script>
import Politico from "@/components/politicos/Politico.vue"
export default {
  name: "Politicos",
  components: {
    Politico
  }
}
</script>

<style scoped lang="scss">
.busca-container {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  margin-right: 10vw;
  margin-left: 10vw;
  // border: #000000 solid 4px;

  .busca {
    display: flex;
    position: relative;
    height: 50%;
    width: 60%;
    border: #000000 solid 2px;
  }

  .filtro {
    display: flex;
    position: relative;
    justify-content: right;
    // align-items: right;
    // text-align: right;
    // flex-direction: right;
    height: 50%;
    width: 40%;
    border: #000000 solid 2px;
  }
}
.grid-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.8em 1.2em;

  // grid-template-areas:
  // "busca busca busca busca";
  // grid-gap: 1.2em;
  // grid-template:
  //   "busca busca busca busca" 0.2fr
  //   / auto;

  .grid-item {
    border: 4px solid #000000;
    // padding: 20px;
  }
  // .busca {
  //   grid-column: 2/4;
  //   // grid-column-start: 1;
  //   // grid-column-end: 4;
  //   grid-row-start: 1;
  //   align-self: center;
  //   // width: 60vh;
  //   height: 10vh;
  // }
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