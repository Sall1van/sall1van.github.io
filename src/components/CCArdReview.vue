<template>
  <div class="card-review">
    <quotes class="quotes" size="28" />
    <div>
      <ul>
        <li v-for="n in 5" :key="n">
          <star :class="{ 'active-star': n <= 4 }"/>
        </li>
      </ul>
      <p>{{ text }}</p>
    </div>
    <div>
      <div>
        <b>Алексей</b>
        <p>Москва</p>
      </div>
      <div>
        <p>Toyota Camry 2023</p>
        <p>Декабрь 2024</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import quotes from '../assets/icons/svg/quotes.svg'
import star from '../assets/icons/svg/star.svg'
const text = "Брал Toyota Camry с японского аукциона. Менеджер Дмитрий был на связи 24/7, слал фото каждый день. Машина пришла ровно через 45 дней, всё чисто, без единой царапины. Экономия около 2 млн по сравнению с официальным дилером."
</script>

<style scoped lang="scss">
.card-review {
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #2A2A38;
  background: #13131A;
  min-width: 320px;
  min-height: 320px;
  max-height: 320px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 599px) {
    padding: 15px;
    max-width: 100%;
  }
  > div:nth-child(2) {
    ul {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: unset;
    }
    p {
      margin-bottom: 21px;
      color: #F0F0F5;
      font-size: 16px;
      line-height: 22px;
    }
  }
  > div:last-child {
    border-top: 1px solid #2A2A38;
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    b {
      font-size: 14px;
      line-height: 20px;
      color: #F0F0F5;
    }
    p {
      font-size: 12px;
      line-height: 16px;
      color: #8888A0;
    }
    > div:last-child {
      text-align: end;
    }
  }
  .quotes {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
