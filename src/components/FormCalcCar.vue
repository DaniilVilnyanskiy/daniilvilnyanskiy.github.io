<template>
  <form class="form" action="">
    <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
    <div class="input-container">
      <InputScroll v-bind:params="carPrice"/>
      <InputScrollPercent v-bind:params="firstPay"/>
      <InputScroll v-bind:params="periodLeasing"/>
      <ResultComponent
          title="Сумма договора лизинга"
          v-bind:result="sumOrder"
      />
      <ResultComponent
          title="Ежемесячный платёж"
          v-bind:result="sumMonthPay"
      />
      <div class="input-content">
        <CustomButton @click="request" :params="button"/>
      </div>
      {{ carPrice.priceCar }}
      {{ this.periodLeasing.priceCar }}
    </div>
  </form>
</template>

<script>
import InputScroll from './InputScroll.vue'
import InputScrollPercent from "@/components/InputScrollPercent";
import ResultComponent from "@/components/Result";
import CustomButton from "@/components/CustomButton";

export default {
  name: 'FormCalcCar',
  components: {
    InputScrollPercent,
    InputScroll,
    ResultComponent,
    CustomButton,
  },
  data () {
    return {
      carPrice: {
        minPrice: 1000000,
        maxPrice: 6000000,
        priceCar: 3300000,
        title: 'Стоимость автомобиля',
        unit: '₽'
      },
      firstPay: {
        minPercent: 10,
        maxPercent: 60,
        priceCar: 3300000,
        title: 'Первоначальный взнос',
        unit: 13,
      },
      periodLeasing: {
        minPercent: '1',
        maxPercent: '60',
        title: 'Срок лизинга',
        unit: 'мес.',
        priceCar: 60,
      },
      button: {
        w100: true,
      }
    }
  },
  computed: {
    sumOrder() {
      return parseInt(this.initialPay + (this.periodLeasing.priceCar * this.sumMonthPay))
    },
    initialPay() {
      return (this.firstPay.unit / 100) * this.carPrice.priceCar;
    },
    sumMonthPay() {
      return parseInt((this.carPrice.priceCar - this.initialPay) * ((0.035 * Math.pow((1 + 0.035), this.periodLeasing.priceCar)) / (Math.pow((1 + 0.035), this.periodLeasing.priceCar) - 1)))
    }
  },
  methods: {
    async request(e) {
      e.preventDefault();
      const url = 'https://eoj3r7f3r4ef6v4.m.pipedream.net';
      const priceCar = this.carPrice.priceCar;
      const initPay = this.initialPay;
      const month = this.periodLeasing.priceCar;
      const dataBody = {
        priceCar,initPay,month
      }
      console.log(dataBody);
      // eslint-disable-next-line no-unused-vars
      const data = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody),
      })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);})

    }
  },
  watch: {
    // eslint-next-disable-line
    "carPrice.priceCar": function (){
      this.firstPay.priceCar = this.carPrice.priceCar;
    }
  }
}
</script>

<style scoped>
</style>
