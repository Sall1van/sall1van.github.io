<template>
  <header>
    <div class="container">
      <a>
        <div class="logo-block">
          <img
            src="../../public/akira-import.jpg"
            alt="Akira Import - привезём любой автомобиль прямо с аукционов Японии, Кореи и Китая."
          />
          <div>
            <strong>Akira Import</strong>
            <p>Авто из Азии</p>
          </div>
        </div>
      </a>
      <nav>
        <a @click="$emit('toPage', 'about-us')">О Нас</a>
        <a @click="$emit('toPage', 'how-it-work')">Как это работает</a>
        <a @click="$emit('toPage', 'directions')">Направления</a>
        <a @click="$emit('toPage', 'catalog')">Каталог</a>
        <a @click="$emit('toPage', 'reviews')">Отзывы</a>
        <a @click="$emit('toPage', 'contacts')">Контакты</a>
      </nav>
      <div class="phone">
        <a href="tel:+74951234567"> <phoneSvg size="17" /> +7 (800) 123-45-67</a>
        <button @click="$emit('toPage', 'contacts')">Получить расчёт</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="js">
import phoneSvg from '../assets/icons/svg/phone.svg'
</script>

<style scoped lang="scss">
header {
  background-color: #0a0a0f;
  border-bottom: 1px solid #2a2a38;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 32px;
    @media (max-width: 599px) {
      padding: 12px 12px;
    }
  }
}
nav {
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1279px) {
    display: none;
  }
  a {
    cursor: pointer;
    font-size: 14px;
    color: #8888a0;
    &:hover {
      text-decoration: underline;
    }
  }
}
button {
  font-size: 14px;
  //background-color: #F04565;
  background-color: #f34051;
  color: #fff;
  border-radius: 0.75rem;
  width: 148px;
  height: 40px;
}
.phone {
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 919px) {
    flex-direction: column-reverse;
  }
  &:hover {
    a {
      color: #f34051;
    }
    svg {
      stroke: #f34051;
      fill: #f34051;
    }
  }
  a {
    color: #f0f0f5;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: color 0.5s ease;
  }
  svg {
    transition: all 0.5s ease;
    fill: #f0f0f5;
  }
}
.logo-block {
  img {
    @media (max-width: 599px) {
      width: 55px;
      height: 45px;
    }
  }
}
</style>
