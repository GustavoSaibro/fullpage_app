<template>
  <div class="container">
    <div class="foto-partido">
      <img
        src="@/assets/partido-novo.png"
        alt=""
      >
    </div>
    <div class="dados-part">
      <div class="nome-part">
        Nome do partido
      </div>
      <div class="num-cand">
        Parlamentares: 42
      </div>
    </div>
    <div class="info">
      <div class="projetos">
        <ul>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
          <li>Projeto 4</li>
        </ul>
      </div>
      <div class="gastos">
        <ul>
          <li>Gasto 1</li>
          <li>Gasto 2</li>
          <li>Gasto 3</li>
          <li>Gasto 4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
* {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.container {
  box-sizing: border-box;
  border: rgba(10, 9, 9, 0.6) solid 4px;

  .foto-candidato {
    height: 50%;
    img {
      object-fit: cover;
    }
  }
  .dados-part {
    box-sizing: border-box;
    flex-direction: row;
    height: 8em;
    border-bottom: rgba(165, 157, 157, 0.5) solid 1px;
    .nome-part {
      box-sizing: border-box;
      // margin: 0.2em;
      padding: 0.8em;
      word-break: break-word;
      white-space: pre-wrap;
      -moz-white-space: pre-wrap;
      width: 100%;
    }
    .num-cand {
      box-sizing: border-box;
      padding: 0.8em;
    }
  }

  .info {
    display: grid;
    box-sizing: border-box;
    padding: 0.8em;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;

    .gastos {
      padding: 0.7em;
      margin-left: 0.2em;
      box-sizing: border-box;
      border: rgba(165, 157, 157, 0.5) solid 1px;
    }
    .projetos {
      padding: 0.7em;
      margin-right: 0.2em;
      box-sizing: border-box;
      border: rgba(165, 157, 157, 0.5) solid 1px;
    }
  }
}
</style>