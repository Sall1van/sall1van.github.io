<template>
  <section id="reviews">
    <div class="container">
      <div class="head-section">
        <div class="red-line"></div>
        <h2>Отзывы клиентов</h2>
        <p>Реальные люди, реальные истории. Без фильтров.</p>
      </div>
      <div>
        <CCArdReview />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CCArdReview from '@/components/CCArdReview.vue'
</script>

<style scoped lang="scss">
section {
  background-color: #0A0A0F;
}
.head-section {
  margin-bottom: 65px;
  @media (max-width: 919px) {
    margin-bottom: 20px;
  }
}
</style>
