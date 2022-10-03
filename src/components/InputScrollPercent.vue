<template>
  <div class="input-content">
    <span>{{ params.title }}</span>
    <label class="input-content__inner">
      <label class="input-content__inner_percent">
        <input
            v-mask="['##%']"
            :value="paramsPrice.unit + '%'"
            @keyup="setInputValuePercent"
        >
      </label>
      <input
          disabled
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
    setInputValuePercent(e) {
      console.log(e.target.closest('input').value);
      let parent = Number(e.target.closest('input').value.replaceAll(' ', '').replaceAll('%',''));
      console.log('-----------');
      console.log(parent);
      console.log(this.params);
      if (parent >= this.params.maxPercent) {
        parent = this.params.maxPercent;
      }
      if (parent < this.params.minPercent) {
        parent = this.params.minPercent;
      }

      this.paramsPrice.unit = parent;
      console.log(this.paramsPrice);
      console.log(parent);

    }
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
