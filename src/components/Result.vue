<template>
  <div class="input-content">
    <span>{{ title }}</span>
    <span>{{ result }}</span>
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
