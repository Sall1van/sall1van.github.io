<template>
  <section>
    <div class="container">
      <ul class="countries">
        <li><img src="../assets/icons/img/JP.png" />Япония</li>
        <li><img src="../assets/icons/img/KR.png" />Корея</li>
        <li><img src="../assets/icons/img/CN.png" />Китай</li>
      </ul>
      <h1>
        <span>Пригоним авто</span>
        <br />
        <span>из Азии</span>
        <br />
        <span>под ключ</span>
      </h1>
      <p>
        Toyota, Hyundai, BYD, Lexus — любой автомобиль прямо с аукционов Японии, Кореи и Китая.
        Таможня, доставка и оформление включены.
      </p>
      <ul class="types">
        <li><guard size="15" />Официальный импорт</li>
        <li><clock size="15" />30–60 дней под ключ</li>
        <li><lineSvg size="15" />До 40% дешевле рынка</li>
      </ul>
      <div class="buttons">
        <button @click="$emit('toPage', 'contacts')">Подобрать авто <arrowRight size="18" /></button>
        <button @click="$emit('toPage', 'how-it-work')">Как это работает</button>
      </div>
      <div class="reasons">
        <ul>
          <li>
            <b>1 200+</b>
            <p>автомобилей доставлено</p>
          </li>
          <li>
            <b>7 лет</b>
            <p>на рынке</p>
          </li>
          <li>
            <b>98%</b>
            <p>довольных клиентов</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import guard from '../assets/icons/svg/guard.svg'
import clock from '../assets/icons/svg/clock.svg'
import lineSvg from '../assets/icons/svg/line.svg'
import arrowRight from '../assets/icons/svg/arrow-right.svg'
</script>

<style scoped lang="scss">
section {
  background:
    radial-gradient(80% 60% at 50% 0, #e8192c2e, #0000 65%),
    radial-gradient(40% 40% at 80% 30%, #ffb80012, #0000 60%), #0a0a0f;
  .countries {
    display: flex;
    align-items: center;
    gap: 12px;
    li {
      background: linear-gradient(135deg, #e8192c26, #e8192c0d);
      border: 1px solid #e8192c4d;
      padding: 6px 16px;
      width: max-content;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #8888a0;
      @media (max-width: 599px) {
        font-size: 14px;
      }
      img {
        width: 20px;
      }
    }
  }
  .types {
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 599px) {
      flex-direction: column;
    }
    li {
      background-color: #1e1e2a;
      color: #f0f0f5;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 12px;
      padding: 10px 16px;
      box-sizing: border-box;
      @media (max-width: 599px) {
        width: 235px;
        justify-content: center;
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 56px;
    @media (max-width: 599px) {
      flex-direction: column;
    }
    > * {
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #f0f0f5;
      padding: 17px 30px;
      font-size: 16px;
      @media (max-width: 599px) {
        width: 235px;
        justify-content: center;
      }
    }
    button:first-child {
      background-color: #f34051;
    }
    button:last-child {
      border: 1px solid #2a2a38;
      background-color: transparent;
      transition: box-shadow 0.3s ease;
      &:hover {
        box-shadow:
          0 0 0 1px #e8192c66,
          0 8px 32px #e8192c26;
      }
    }
    svg {
      fill: none;
      stroke: white;
    }
  }
  .reasons {
    width: 730px;
    border-top: 1px solid #2a2a38;
    @media (max-width: 1023px) {
      width: 100%;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 32px;
      li:nth-child(2) {
        padding: 0 32px;
        border-left: 1px solid #2a2a38;
        border-right: 1px solid #2a2a38;
      }
      b {
        font-size: 30px;
        color: #f0f0f5;
        @media (max-width: 599px) {
          font-size: 20px;
          white-space: nowrap;
        }
      }
      p {
        font-size: 12px;
        color: #8888a0;
      }
    }
  }
  h1 {
    font-size: 60px;
    outline-color: color-mix(in oklab, var(--ring) 50%, transparent);
    @media (max-width: 599px) {
      font-size: 30px;
    }
    span:nth-child(3) {
      background: linear-gradient(135deg, #e8192c, #ff6b7a, #ffb800);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    span:nth-child(1),
    span:nth-child(5) {
      color: #8888a0;
    }
  }
  p {
    max-width: 560px;
    color: #8888a0;
    line-height: 1.65;
  }
}
</style>
