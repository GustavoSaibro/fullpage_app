<template>
  <!-- TODO Refatorar nome das classes -->
  <div class="main-card">
    <div class="item-card item-1">
      <InfoCard>
        <div>
          <h1>Cidadania já</h1>
        </div>
      </InfoCard>
    </div>

    <div class="item-card item-2">
      <InfoCard>
        <div>asod uiaoskdhakulsjhd akjshdkasjhdaskjashdkj</div>
      </InfoCard>
    </div>

    <div class="item-card item-3">
      <InfoCard>
        <div>asod uiaoskdhakulsjhd akjshdkasjhdaskjashdkj</div>
      </InfoCard>
    </div>

    <div class="item-card item-4">
      <InfoCard>
        <div>asod uiaoskdhakulsjhd akjshdkasjhdaskjashdkj</div>
      </InfoCard>
    </div>

    <div class="item-card item-5">
      <InfoCard>
        <div>asod uiaoskdhakulsjhd akjshdkasjhdaskjashdkj</div>
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from '../components/InfoCard.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    InfoCard

  }
}
</script>

<style scoped lang="scss">
.main-card {
  display: grid;
  width: 80vw;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1.2em;

  .item-card {
    border: 4px solid #000000;
    // padding: 20px;
  }
  .item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
  }
  .item-2 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
  }
  .item-3 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
  }
  .item-4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
  }
  .item-5 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
  }
}
</style>