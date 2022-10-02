<template>
  <div class="input-content">
    <span>{{ params.title }}</span>
    <label class="input-content__inner">
      <label class="input-content__inner_percent">
        <input :value="params.unit + '%'">
      </label>
      <input
          v-mask="['# ### ###']"
          :value="parseInt(percent * params.priceCar )">
    </label>
    <div class="input-content__slider">
      <input type="range"
             :min="params.minPercent"
             :max="params.maxPercent"
             v-model.number="paramsPrice.unit"
             v-bind:style="{backgroundSize: num}"
             step="1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputScrollPercent',
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
      unit: String
    },
  },
  methods: {
    changesSliderPercent(e) {
      e.preventDefault();
      //
      const body = document.querySelector('body');
      const input = body.querySelector('.input-content__inner');
      console.log(input)
      return input;
    },
  },
  computed: {
    percent() {
      return this.params.unit / 100;
    },
    num() {
      return (this.params.unit - 10) / (this.params.maxPercent - this.params.minPercent) * 100 + '%' + '100%'
    }
  },
  watch: {
    params: function () {
      console.log(this.params);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
