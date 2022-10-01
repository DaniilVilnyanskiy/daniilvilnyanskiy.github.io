<template>
  <button class="btn" :class="{w100: params.w100}">
    Отправить
  </button>
</template>

<script>

export default {
  name: 'CustomButton',
  components: {
  },
  data () {
    return {
      paramsList: this.params,
    }
  },
  props: {
    params: {
      w100: Boolean,
    },
  },
  computed: {

  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
