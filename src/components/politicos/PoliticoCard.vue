<template>
  <div class="container">
    <div class="foto-candidato">
      <img
        src="@/assets/candidato.jpg"
        alt=""
      >
      <div class="foto-partido">
        <img
          src="@/assets/partido-novo.png"
          alt=""
        >
        <div class="sigla">NP</div>
      </div>
    </div>
    <div class="dados-cand">
      <div class="nome-cand">
        Nome de Candidatura
      </div>
      <div class="uf-cand">
        <img
          src="@/assets/logo.png"
          alt=""
        >
      </div>
    </div>

    <div class="contato">
      <div class="email">nome@email.com</div>
      <div class="twitter">@twitter</div>
      <!-- <div class="tel">99 991897456</div> -->
    </div>

    <div class="info">
      <div class="projetos">
        <ul>
          <li>projeto 1</li>
          <li>projeto 2</li>
          <li>projeto 3</li>
          <li>projeto 4</li>
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
@import "@/styles/politicos/politicoCard.scss";
</style>