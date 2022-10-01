<template>
  <div class="input-content">
    <span>{{ params.title }}</span>
    <label class="input-content__inner">
      <label class=" input-content__inner_percent">{{ params.unit + '%' }}</label>
      <input :value="parseInt(percent * params.priceCar )">
    </label>
    <div class="input-content__slider">
      <input type="range"
             :min="params.minPercent"
             :max="params.maxPercent"
             v-model.number="paramsPrice.unit"
             v-bind:style="{backgroundSize: params.unit + '%' + '100%'}"
             step="1">
    </div>
    {{ params.unit }}
    {{ percent }}
    {{ params.priceCar }}
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
