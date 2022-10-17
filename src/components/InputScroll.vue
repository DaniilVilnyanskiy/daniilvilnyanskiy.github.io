<template>
  <div class="input-content" v-bind:class="{ notinput: params.noInput }">
    <span>{{ params.title }}</span>
    <label class="input-content__inner">
      <label v-if="params.unit === 'svg'">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6774 12.84C20.1074 12.84 20.1074 0.899999 11.6774 0.899999H2.79742V8.64H0.487422V12.84H2.79742V14.13H0.487422V18.33H2.79742V21H7.74742V18.33H14.9174V14.13H7.74742V12.84H11.6774ZM11.2274 5.7C13.3574 5.7 13.3274 8.64 11.2274 8.64H7.74742V5.7H11.2274Z" fill="#575757"/>
        </svg>
      </label>
      <label v-else>{{ params.unit }}</label>
      <input
          v-mask="paramsPrice.month ? ['##'] :['# ### ###']"
          :value="params.priceCar ? formatting(params.priceCar) : params.period"
          @keyup="setInputValue"
          @input="$emit('minMaxCount')"
          />
    </label>
    <div class="input-content__slider">
      <input type="range"
             :min="params.minPrice ? params.minPrice : params.minPercent"
             :max="params.maxPrice ? params.maxPrice : params.maxPercent"
             v-model.number="paramsPrice.priceCar"
             :style="{
               backgroundSize: num
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
      month: String,
    },
  },
  computed: {
    num() {
      return this.params.maxPrice ?
          (this.params.priceCar - this.params.minPrice) / (this.params.maxPrice - this.params.minPrice) * 100 + '% ' + '100%' :
          this.params.priceCar /  this.params.maxPercent * 100 + '% '+ '100%'
    }
  },
  methods: {
    formatting(param) {
      Math.round(param);
      return String(param).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    },
    setInputValue(e) {
      let parent = Number(e.target.closest('input').value.replaceAll(' ', ''));
      if (parent > this.params.maxPrice) {
        parent = this.params.maxPrice;
      }
      if (parent < this.params.minPrice) {
        parent = this.params.minPrice;
      }
      this.paramsPrice.priceCar = parent;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-content__inner svg {
  margin-top: 5px;
}
</style>
