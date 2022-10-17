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
          :value="formatting(percent * params.priceCar)">
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
    formatting(param) {
      parseInt(param);
      let string = String(param);
      if (string.indexOf('.')) {
        let str = string.split('.');
        if (str.length > 1) {
          param = str[0];
        }
        // eslint-disable-next-line no-empty
      } else {

      }
      return String(param).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    },
    setInputValuePercent(e) {
      console.log(e);
      let parent = Number(e.target.closest('input').value.replaceAll(' ', '').replaceAll('%',''));
      if (parent >= this.params.maxPercent) {
        parent = this.params.maxPercent;
      }
      if (parent < this.params.minPercent) {
        parent = this.params.minPercent;
      }

      this.paramsPrice.unit = parent;
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
