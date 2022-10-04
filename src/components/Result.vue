<template>
  <div class="input-content input-content__result">
    <span class="">{{ title }}</span>
    <span
        class="first-title sub-title"
        v-mask="['# ### ###']"
    >{{ result.toLocaleString('ru') }}</span>
  </div>
</template>

<script>
export default {
  name: 'ResultComponent',
  data () {
    return {
      paramsPrice: this.params
    }
  },
  props: {
    title: String,
    result: Number,
  },
  computed: {

  },
  methods: {
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
