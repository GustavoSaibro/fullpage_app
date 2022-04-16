<template>
  <div class="busca-container">
    <input
      class="busca"
      type="search"
      name="busca"
      placeholder="busca"
    />
    <div class="filtro">
      Filtro
    </div>
  </div>
</template>

<script>
export default {

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

  .filtro {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 1.1em;
    height: 50%;
    width: 50%;
    border: #000000 solid 2px;
  }

  .busca {
    display: flex;
    position: relative;
    justify-content: right;
    margin: 1.1em;
    height: 50%;
    width: 50%;
    border: #000000 solid 2px;
  }
}
</style>