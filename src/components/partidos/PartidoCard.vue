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

// <style scoped lang="scss">
@import "@/styles/partidos/partidoCard.scss";
</style>