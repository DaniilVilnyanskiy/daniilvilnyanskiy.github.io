<template>
  <div class="input-content" v-bind:class="{ notinput: params.noInput }">
    <span>{{ params.title }}</span>
    <label class="input-content__inner">
      <label>{{ params.unit }}</label>
      <input
          v-mask="paramsPrice.minPercent ? ['##'] :['# ### ###']"
          :value="params.priceCar ? params.priceCar : params.period"
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
