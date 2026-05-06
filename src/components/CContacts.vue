<template>
  <section id="contacts">
    <div class="container">
      <div class="head-section">
        <div class="red-line"></div>
        <h2>Оставить заявку</h2>
        <p>
          Опишите желаемый автомобиль — менеджер свяжется <br />
          в течение 30 минут и предоставит подборку вариантов.
        </p>
      </div>
      <div>
        <div class="form">
          <div>
            <label for="input_name">Ваше имя</label>
            <input maxlength="100" id="input_name" placeholder="Алексей" v-model="name" />
          </div>
          <div>
            <label for="input_phone">Номер телефона</label>
            <MaskInput
              id="input_phone"
              placeholder="+7 (###) ###-##-##"
              :mask="'+7 (###) ###-##-##'"
              v-model="phone"
            />
          </div>
          <div>
            <label for="textarea_description">Желаемый автомобиль и бюджет</label>
            <textarea
              id="textarea_description"
              placeholder="Например: Toyota RAV4 2023, бюджет до 4 млн, предпочтительно Япония"
              v-model="description"
              maxlength="200"
            ></textarea>
          </div>
          <button @click="sendForm" :class="{ 'disabled': loading }" :disabled="loading">Отправить заявку</button>
          <p>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
        </div>
        <div class="contacts">
          <a href="tel:+74951234567" class="block phone">
            <div class="icon-block">
              <phoneSvg />
            </div>
            <b>+7 (495) 123-45-67</b>
          </a>
          <a target="_blank" href="https://t.me/+5n82n8_XYm5iNDIy" class="block telegram">
            <div class="icon-block">
              <telegram />
            </div>
            <b>Мы в Telegram</b>
          </a>
          <a
            target="_blank"
            href="https://max.ru/join/71zj5_0T4kYH_ovGMZvgR3yuSPQB4-ipx6Zbmxxv2SY"
            class="block max"
          >
            <div class="icon-block">
              <max />
            </div>
            <b>Мы в Max</b>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import max from '../assets/icons/svg/max.svg'
import telegram from '../assets/icons/svg/telegram.svg'
import phoneSvg from '../assets/icons/svg/phone.svg'
import { ref } from 'vue'
import axios from 'axios'
const name = ref('')
const phone = ref('')
const description = ref('')
const loading = ref(false)
async function sendForm() {
  loading.value = true;
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 3000);
  });
  promise1.then((res) => {
    loading.value = false;
  })
  // try {
  //   const res = await axios.post('/api/v1/send-form', {
  //     name: name.value,
  //     phone: phone.value,
  //     description: description.value,
  //   })
  //   console.log(res)
  // } catch (e) {
  //   console.log(e)
  // } finally {
  //   loading.value = false;
  // }
}
</script>

<style scoped lang="scss">
section {
  background-color: #0a0a0f;
}
.container {
  max-width: 1024px;
  > div:last-child {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    @media (max-width: 919px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
.head-section {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 919px) {
    margin-bottom: 20px;
  }
}
.form {
  padding: 40px;
  background-color: #13131a;
  border-radius: 16px;
  border: 1px solid #2a2a38;
  max-width: 665px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 599px) {
    padding: 15px;
  }
  label {
    font-size: 14px;
    line-height: 20px;
    color: #f0f0f5;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
  button {
    border-radius: 16px;
    padding: 16px;
    background-color: #e8192c;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    &:hover {
      background-color: #c8102e;
    }
    &.disabled {
      background-color: #a0a0a0 !important;
    }
  }
  > p {
    color: #8888a0;
    font-size: 12px;
    line-height: 16px;
    margin-top: 20px;
    text-align: center;
  }
}
.contacts {
  max-width: 320px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #f0f0f5;
  }
  svg {
    fill: #e8192c;
  }
}
input,
textarea {
  border: 1px solid #8888a0;
  border-radius: 16px;
  background-color: #2a2a38;
  padding: 16px;
  color: #f0f0f5;
}
textarea {
  resize: none;
  height: 150px;
  overflow: auto;
}
.icon-block {
  margin-bottom: unset;
}
.telegram {
  svg {
    fill: none;
    stroke: #e8192c;
  }
}
.max {
  svg {
    stroke: #e8192c;
  }
}
</style>
