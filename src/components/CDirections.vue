<template>
  <section id="directions">
    <div class="container">
      <div class="head-section">
        <div class="red-line"></div>
        <h2>Направления</h2>
        <p>
          Работаем с ведущими авторынками Азии. Каждое направление — отдельная экспертиза и
          налаженная логистика.
        </p>
      </div>
      <ul class="buttons">
        <li @click="country = 'JP'">
          <button :class="{ active: country === 'JP' }">
            <img alt="флаг Япония" :src="JP" />
            Япония
          </button>
        </li>
        <li @click="country = 'KR'">
          <button :class="{ active: country === 'KR' }">
            <img alt="флаг Корея" :src="KR" />
            Корея
          </button>
        </li>
        <li @click="country = 'CN'">
          <button :class="{ active: country === 'CN' }">
            <img alt="флаг Китай" :src="CN" />
            Китай
          </button>
        </li>
      </ul>
      <div class="main-block">
        <div>
          <div class="head">
            <img :alt="'флаг ' + countries[country].name" :src="countries[country].imgSrc" />
            <div>
              <b>{{ countries[country].name }}</b>
              <p>{{ countries[country].additionalText }}</p>
            </div>
          </div>
          <p class="main-text" v-html="countries[country].mainText"></p>
          <ul class="advantages">
            <li v-for="i in countries[country]?.advantages" :key="i">
              <checkCircle />
              {{ i }}
            </li>
          </ul>
          <div class="bottom">
            <ul>
              <li>
                <span>Доставка</span>
                <strong>{{ countries[country]?.delivery }}</strong>
              </li>
              <li>
                <span>Цены</span>
                <strong>от {{ countries[country]?.price }} ₽</strong>
              </li>
              <li>
                <span>Бренды</span>
                <strong>{{ countries[country]?.popularBrands.length }}+ марок</strong>
              </li>
            </ul>
          </div>
          <button class="button_selection" @click="$emit('toPage', 'contacts')">
            Подобрать авто из {{ computedText }}
            <arrowRight size="20" />
          </button>
        </div>

        <div>
          <div class="brands">
            <h3>Популярные марки</h3>
            <ul>
              <li v-for="brand in countries[country]?.popularBrands" :key="brand">
                {{ brand }}
              </li>
            </ul>
          </div>
          <div class="routes"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import JP from '@assets/icons/img/JP.png'
import KR from '@assets/icons/img/KR.png'
import CN from '@assets/icons/img/CN.png'
import checkCircle from '../assets/icons/svg/check-circle.svg'
import arrowRight from '../assets/icons/svg/arrow-right.svg'
import { ref, computed } from 'vue'
const country = ref('JP')

const countries = {
  JP: {
    additionalText: 'Легенды японского автопрома',
    name: 'Япония',
    mainText:
      'Японские аукционы — лучший выбор для тех, кто ценит качество. Пробеги не скручены, история проверяется.<br />Аукционные листы с оценкой 3–5.',
    advantages: [
      'Аукционы USS, TAA, JU, HAA — крупнейшие в мире',
      'Независимая оценка состояния авто 3–5 звёзд',
      'Доставка Йокогама → Владивосток за 10–15 дней',
      'Праворульные и леворульные модели',
    ],
    popularBrands: ['Toyota', 'Lexus', 'Nissan', 'Honda', 'Mazda', 'Subaru'],
    delivery: '10–15 дней',
    price: '800 000',
    imgSrc: JP,
  },
  KR: {
    additionalText: 'Надёжность и технологии',
    name: 'Корея',
    mainText:
      'Корейский рынок предлагает отличные автомобили по доступным ценам. Особенно популярны электромобили и гибриды Hyundai/Kia.',
    advantages: [
      'Только леворульные европейские комплектации',
      'Богатый выбор электромобилей и гибридов',
      'Доставка Пусан → Владивосток за 3–5 дней',
      'Актуальные модели 2022–2025 годов',
    ],
    popularBrands: ['Hyundai', 'Kia', 'Genesis', 'SsangYong'],
    delivery: '3–5 дней',
    price: '1 100 000',
    imgSrc: KR,
  },
  CN: {
    additionalText: 'Будущее уже здесь',
    name: 'Китай',
    mainText:
      'Китайский авторынок — самый динамичный в мире. BYD, Chery, Geely предлагают передовые технологии по ценам ниже европейских аналогов.',
    advantages: [
      'Прямые поставки от официальных дистрибьюторов',
      'Новейшие электромобили и PHEV',
      'Доставка Тяньцзинь → Владивосток за 7–10 дней',
      'Гарантия производителя сохраняется',
    ],
    popularBrands: ['BYD', 'Chery', 'Geely', 'Haval', 'Li Auto'],
    delivery: '7–10 дней',
    price: '1 200 000',
    imgSrc: CN,
  },
}

const computedText = computed(() => {
  if (country.value === 'JP') return 'Японии'
  if (country.value === 'KR') return 'Кореи'
  if (country.value === 'CN') return 'Китая'
})
</script>

<style scoped lang="scss">
section {
  background-color: #1a1a24;
}
.container {
  > div {
    margin-bottom: 56px;
    @media (max-width: 919px) {
      margin-bottom: 20px;
    }
  }
}
.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  @media (max-width: 919px) {
    margin-bottom: 20px;
  }
  @media (max-width: 599px) {
    flex-direction: column;
  }
  li {
    width: max-content;
  }
  button {
    border-radius: 16px;
    background-color: #13131a;
    border: 1px solid #2a2a38;
    color: #8888a0;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    @media (max-width: 599px) {
      width: 130px;
    }
    &.active {
      background-color: #e8192c;
      border-color: #e8192c;
      color: #fff;
    }
    img {
      width: 20px;
    }
  }
}
.main-block {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  @media (max-width: 919px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  & > div:first-child {
    background-color: #13131a;
    border: 1px solid #2a2a38;
    padding: 41px;
    border-radius: 24px;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 919px) {
      padding: 16px;
    }
  }
}
.head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  b {
    font-size: 24px;
    line-height: 32px;
    color: #f0f0f5;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #8888a0;
  }
}
.brands {
  max-width: 320px;
  min-width: 320px;
  background-color: #13131a;
  border: 1px solid #2a2a38;
  border-radius: 16px;
  padding: 25px;
  box-sizing: border-box;
  h3 {
    color: #8888a0;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  li {
    padding: 7px 13px;
    border: 1px solid rgba(232, 25, 44, 0.3);
    background: linear-gradient(135deg, #e8192c26, #e8192c0d);
    border-radius: 12px;
    width: max-content;
    box-sizing: border-box;
    color: #f0f0f5;
  }
}
.main-text {
  color: #8888a0;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 30px;
}
.advantages {
  display: flex;
  flex-direction: column;
  gap: 12px;
  li {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #f0f0f5;
  }
}
.bottom {
  padding: 20px;
  background-color: #1e1e2a;
  border: 1px solid #2a2a38;
  border-radius: 16px;
  box-sizing: border-box;
  @media (max-width: 599px) {
    padding: 12px;
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    li {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    span {
      font-size: 12px;
      line-height: 16px;
      color: #8888a0;
    }
    strong {
      font-size: 16px;
      line-height: 24px;
      color: #f0f0f5;
      @media (max-width: 599px) {
        font-size: 12px;
      }
    }
    li:nth-child(1) {
      margin-right: 24px;
      @media (max-width: 599px) {
        margin-right: 12px;
      }
    }
    li:nth-child(2) {
      padding: 0 24px;
      border-left: 1px solid #2a2a38;
      border-right: 1px solid #2a2a38;
      @media (max-width: 599px) {
        padding: 0 12px;
      }
    }
    li:nth-child(3) {
      margin-left: 24px;
      @media (max-width: 599px) {
        margin-left: 12px;
      }
    }
  }
}
.button_selection {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #e8192c;
  font-size: 14px;
  line-height: 20px;
  padding: 15px 30px;
  color: #ffffff;
  border-radius: 16px;
  margin-top: 24px;
  svg {
    fill: none;
    stroke: white;
  }
}
</style>
