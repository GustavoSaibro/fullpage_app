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
@import "@/styles/home/home.scss";
</style>