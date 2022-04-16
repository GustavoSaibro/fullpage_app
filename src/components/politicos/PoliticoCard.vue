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
    .foto-partido {
      position: absolute;
      top: 0.4em;
      right: 0.4em;
      width: 3em;
      height: 3em;
      background-color: rgba(255, 255, 255, 0);

      img {
        width: 2.3em;
        height: 2.3em;
        border: rgba(165, 157, 157, 0.5) solid 1px;
        background-color: rgba(255, 255, 255, 0.5);
      }
      .sigla {
        width: 2.3em;
        background-color: rgba(255, 255, 255, 0.5);
        border-left: rgba(165, 157, 157, 0.5) solid 1px;
        border-right: rgba(165, 157, 157, 0.5) solid 1px;
        border-bottom: rgba(165, 157, 157, 0.5) solid 1px;
        text-align: center;
      }
    }
  }
  .dados-cand {
    box-sizing: border-box;
    flex-direction: row;
    height: 8em;
    border-bottom: rgba(165, 157, 157, 0.5) solid 1px;
    .nome-cand {
      box-sizing: border-box;
      // margin: 0.2em;
      padding: 0.8em;
      word-break: break-word;
      white-space: pre-wrap;
      -moz-white-space: pre-wrap;
      width: 100%;
    }
    img {
      position: absolute;
      top: 1.1em;
      left: 40%;
      width: 1.5em;
      height: 1.5em;
    }
  }
  .contato {
    // margin: 1.1em;
    padding: 0.8em;
    border-bottom: rgba(165, 157, 157, 0.5) solid 1px;
    box-sizing: border-box;
    flex-direction: row;
    width: 100%;
    height: 5em;
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