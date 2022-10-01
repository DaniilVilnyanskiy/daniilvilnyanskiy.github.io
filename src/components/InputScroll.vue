<template>
  <div class="input-content" v-bind:class="{ notinput: params.noInput }">
    <span>{{ params.title }}</span>
    <label class="input-content__inner">
      <label>{{ params.unit }}</label>
      <input :value="params.priceCar ? params.priceCar : params.period">
    </label>
    <div class="input-content__slider">
      <input type="range"
             :min="params.minPrice ? params.minPrice : params.minPercent"
             :max="params.maxPrice ? params.maxPrice : params.maxPercent"
             v-model.number="paramsPrice.priceCar"
             :style="{
               backgroundSize: params.priceCar ? params.priceCar / (6000000 - 0) * 100 + '100%' : paramsPrice.priceCar / 100 * paramsPrice.priceCar + '%' + '100%'
             }"
             step="1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputScroll',
  data () {
    return {
      paramsPrice: this.params
    }
  },
  props: {
    params: {
      minPrice: Number,
      maxPrice: Number,
      minPercent: Number,
      maxPercent: Number,
      priceCar: Number,
      title: String,
      unit: String,
      period: String,
      noInput: Boolean,
    },
  },
  computed: {

  },
  methods: {
    changesSlider(e) {
      e.preventDefault();
      const body = document.querySelector('body');
      const input = body.querySelector('.input-content__inner');
      console.log(input)
      return input;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
