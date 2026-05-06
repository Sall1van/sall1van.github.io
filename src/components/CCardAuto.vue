<template>
  <div class="card-auto">
    <div class="wrapper-img">
      <img />
    </div>
    <div class="characteristics">
      <h3>{{auto.name}}</h3>
      <ul>
        <li>
          <calendar />
          <p>{{ auto.year }}</p>
        </li>
        <li>
          <speedometer />
          <p>{{ auto.mileage }}</p>
        </li>
        <li>
          <refueling />
          <p>{{ auto.fuelType }}</p>
        </li>
      </ul>
      <div>
        <b>{{ auto.price }}</b>
        <p>{{ auto.price }}</p>
      </div>
      <p>
        <placemark />
        Цена включает доставку до Владивостока
      </p>
      <button>
        Узнать подробнее
      </button>
    </div>
 </div>
</template>

<script setup lang="ts">
import calendar from '../assets/icons/svg/calendar.svg'
import speedometer from '../assets/icons/svg/speedometer.svg'
import refueling from '../assets/icons/svg/refueling.svg'
import placemark from '../assets/icons/svg/placemark.svg'
const auto = {
  name: 'Toyota Land Cruiser 300',
  year: 2023,
  mileage: 12000,
  fuelType: 'Дизель',
  price: '14 200 000 ₽',
  imgSrc: '',
  country: 'JP'
}
</script>

<style scoped lang="scss">
.card-auto {
  border-radius: 16px;
  border: 1px solid #2A2A38;
  background-color: #13131A;
  max-width: 320px;
}
.characteristics {
  padding: 20px;
  h3 {
    color: #F0F0F5;
  }
  > button {
    border: 1px solid #E8192C;
    color: #E8192C;
    padding: 10px 0;
    border-radius: 16px;
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 15px;
    li {
      color: #8888A0;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      line-height: 16px;
    }
  }
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    b {
      color: #F0F0F5;
      font-size: 20px;
      line-height: 28px;
    }
    p {
      color: #8888A0;
      font-size: 14px;
      line-height: 20px;
      text-decoration: line-through;
    }
  }
  > p {
    display: flex;
    align-items: center;
    gap: 3px;
    color: #8888A0;
    font-size: 12px;
    line-height: 16px;
    margin: 16px 0;
  }
}
</style>
