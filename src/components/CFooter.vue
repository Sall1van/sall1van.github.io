<template>
  <footer>
    <div class="container">
      <div class="logo-block" @click="$emit('toPage', 'top')">
        <img src="../../public/akira-import.jpg" alt="Akira Import - привезём любой автомобиль прямо с аукционов Японии, Кореи и Китая." />
        <div>
          <strong>Akira Import</strong>
          <p>Авто из Азии</p>
        </div>
      </div>
      <div class="politics">
        <p>©2026 AkiraImport. Все права защищены.</p>
        <div>
          <a target="_blank">Политика конфиденциальности</a>
          <a target="_blank">Пользовательское соглашение</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
footer {
  background-color: #13131A;
  border-top: 1px solid #2A2A38;
  padding: 30px 0 50px;
}
.politics {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #2A2A38;
  padding-top: 32px;
  color: #8888A0;
  font-size: 14px;
  line-height: 20px;
  @media (max-width: 919px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 22px;
  }
}
.logo-block {
  margin-bottom: 32px;
  @media (max-width: 919px) {
    justify-content: center;
  }
}
</style>
