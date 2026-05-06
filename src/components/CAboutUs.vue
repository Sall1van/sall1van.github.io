<template>
  <section id="about-us">
    <div class="container">
      <div class="left-block">
        <div class="head-section">
          <div class="red-line"></div>
          <h2>Почему <br/>выбирают нас</h2>
          <p>Akira Import — команда профессионалов, которые сами ездят на автомобилях из Азии и знают рынок изнутри.</p>
        </div>
        <ul>
          <li class="block"><b>7 лет</b><p>успешной работы на рынке</p></li>
          <li class="block"><b>1 200+</b><p>доставленных автомобилей</p></li>
          <li class="block"><b>₽0</b><p>скрытых доплат</p></li>
        </ul>
      </div>
      <div class="right-block">
        <ul>
          <li class="block">
            <div class="icon-block">
              <guard />
            </div>
            <b>Официальная таможня</b>
            <p>Работаем только по белым схемам. Все автомобили растормаживаются официально, выдаём полный пакет документов.</p>
          </li>
          <li class="block">
            <div class="icon-block">
              <earth size="20" />
            </div>
            <b>3 рынка в одном месте</b>
            <p>Япония, Корея и Китай — не нужно обращаться в разные компании. Единый менеджер ведёт вас от заявки до получения.</p>
          </li>
          <li class="block">
            <div class="icon-block">
              <headphones size="20" />
            </div>
            <b>Поддержка 24/7</b>
            <p>Отвечаем на WhatsApp, Telegram и по телефону в любое время. Фото и отчёты о вашем авто в режиме реального времени.</p>
          </li>
          <li class="block">
            <div class="icon-block">
              <user size="20" />
            </div>
            <b>1 200+ клиентов</b>
            <p>За 7 лет работы мы помогли более чем 1 200 клиентам по всей России. 98% возвращаются с новыми заказами.</p>
          </li>
          <li class="block">
            <div class="icon-block">
              <check size="20" />
            </div>
            <b>Проверка истории авто</b>
            <p>Полный отчёт CarFax / Carview. Проверяем по аукционным листам, базам ДТП и данным производителя.</p>
          </li>
          <li class="block">
            <div class="icon-block">
              <dollar size="20" />
            </div>
            <b>Фиксированная цена</b>
            <p>Называем итоговую сумму до начала работы. Никаких скрытых комиссий и доплат по дороге.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import guard from '../assets/icons/svg/guard.svg'
import earth from '../assets/icons/svg/earth.svg'
import headphones from '../assets/icons/svg/headphones.svg'
import user from '../assets/icons/svg/user.svg'
import check from '../assets/icons/svg/check.svg'
import dollar from '../assets/icons/svg/dollar.svg'
</script>

<style scoped lang="scss">
section {
  background-color: #1A1A24;
}
.container {
  display: flex;
  gap: 20px;
  @media (max-width: 919px) {
    flex-direction: column;
    align-items: center;
  }
}
.left-block {
  max-width: 320px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    @media (max-width: 919px) {
      gap: 12px;
      margin-top: 12px;
    }
    li {
      max-width: 320px;
      max-height: 106px;
      b {
        background: linear-gradient(135deg, #e8192c, #ff6b7a, #ffb800);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 36px;
        line-height: 40px;
      }
      p {
        font-size: 14px;
        color: #8888A0;
        line-height: 20px;
      }
    }
  }
}
.right-block {
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    @media (max-width: 919px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    li {
      padding: 25px;
      width: 320px;
      height: 235px;
      b {
        color: #F0F0F5;
        font-size: 16px;
        line-height: 24px;
      }
      p {
        color: #8888A0;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
</style>
