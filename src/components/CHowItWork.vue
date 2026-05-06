<template>
  <section id="how-it-work">
    <div class="container">
      <div class="head-section">
        <div class="red-line"></div>
        <h2>Как это работает</h2>
        <p>Прозрачный процесс от заявки до ключей в руках —<br />без скрытых платежей и сюрпризов.</p>
      </div>
      <div class="bottom-block">
        <div>
          <div>
            <div class="block">
              <div class="icon-block">
                <message />
              </div>
              <div class="number-and-line">
                <span>01</span>
                <div></div>
              </div>
              <b>Заявка</b>
              <p>Оставляете заявку или звоните. Менеджер консультирует, уточняет пожелания по марке, модели, бюджету и срокам.</p>
            </div>
            <div class="block">
              <div class="icon-block">
                <search />
              </div>
              <div class="number-and-line">
                <span>02</span>
                <div></div>
              </div>
              <b>Поиск на аукционе</b>
              <p>Подбираем варианты на аукционах USS, TAA, JU Auction (Япония), Hyundai Glovis (Корея) и площадках Китая.</p>
            </div>
          </div>
          <div class="block block-external">
            <div class="icon-block">
              <checkList />
            </div>
            <div class="number-and-line">
              <span>03</span>
              <div></div>
            </div>
            <b>Расчёт стоимости</b>
            <p>Полная калькуляция: цена авто, аукционный сбор, фрахт, таможенные пошлины, утильсбор, СБКТС.</p>
          </div>
        </div>
        <div>
          <div>
            <div class="block">
              <div class="icon-block">
                <calculate />
              </div>
              <div class="number-and-line">
                <span>04</span>
                <div></div>
              </div>
              <b>Доставка морем</b>
              <p>Отправляем из портов Йокогама, Пусан, Тяньцзинь до Владивостока или Новороссийска. Срок 10–25 дней.</p>
            </div>
            <div class="block">
              <div class="icon-block">
                <ship />
              </div>
              <div class="number-and-line">
                <span>05</span>
                <div></div>
              </div>
              <b>Таможня и оформление</b>
              <p>Берём на себя весь пакет документов: ТД, СБКТС, ПТС. Работаем по официальным схемам.</p>
            </div>
          </div>
          <div class="block block-external">
            <div class="icon-block">
              <car />
            </div>
            <div class="number-and-line">
              <span>06</span>
              <div></div>
            </div>
            <b>Передача авто</b>
            <p>Доставляем в ваш город или передаём во Владивостоке. Полный комплект документов для регистрации.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import message from '../assets/icons/svg/message.svg'
import search from '../assets/icons/svg/search.svg'
import checkList from '../assets/icons/svg/check-list.svg'
import calculate from '../assets/icons/svg/calculate.svg'
import ship from '../assets/icons/svg/ship.svg'
import car from '../assets/icons/svg/car.svg'
</script>

<style scoped lang="scss">
section {
  background-color: #0A0A0F;
}
.bottom-block {
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  max-width: 1376px;
  @media (max-width: 1439px) {
    flex-direction: column;
  }
  @media (max-width: 1023px) {
    align-items: center;
    margin-top: 30px;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1439px) {
      flex-direction: row;
      gap: 24px;
    }
    @media (max-width: 1023px) {
      flex-direction: column;
      gap: 12px;
    }
    > div {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      @media (max-width: 1023px) {
        flex-direction: column;
        gap: 12px;
      }
    }
  }
}
.block {
  width: 325px;
  height: 290px;
  max-width: 325px;
  max-height: 290px;
  @media (max-width: 599px) {
    max-height: 235px;
  }
  b {
    color: #F0F0F5;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px;
    display: inline-block;
  }
  p {
    color: #8888A0;
    font-size: 14px;
    line-height: 22px;
  }
}
.block-external {
  width: 100%;
  max-width: unset;
  max-height: 244px;
  height: 244px;
  flex-direction: column;
  gap: unset !important;
  @media (max-width: 1439px) {
    flex-direction: column;
    max-width: 325px;
    height: 290px;
    max-height: 290px;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 599px) {
    max-height: 235px;
  }
}
.number-and-line {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 12px;
  span {
    color: #E8192C;
  }
  div {
    width: 100%;
    height: 1px;
    background-color: #2A2A38;
  }
}
</style>
