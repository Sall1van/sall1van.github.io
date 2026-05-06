<template>
  <section id="catalog">
    <div class="container">
      <div class="head-section">
        <div class="red-line"></div>
        <h2>Доступные автомобили</h2>
        <p>Актуальные предложения с аукционов. Цены включают доставку до Владивостока.</p>
      </div>
      <div>
        <CCardAuto />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import CCardAuto from "./CCardAuto.vue";
</script>

<style scoped lang="scss">
section {
  background-color: #0A0A0F;
}
.head-section {
  margin-bottom: 65px;
  @media (max-width: 919px) {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
