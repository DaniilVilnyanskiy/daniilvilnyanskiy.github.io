<template>
  <button class="btn" :class="params.className">
    <span
      class="btn-span-large"
      v-if="params.loadingProcess === 1"
    >Отправить</span>
    <LoadingProcess
    v-if="params.loadingProcess === 2"/>
  </button>
  {{paramsList.loadingProcess}}
</template>

<script>
import LoadingProcess from './LoadingProcess'

export default {
  name: 'CustomButton',
  components: {
    LoadingProcess
  },
  data () {
    return {
      paramsList: this.params,
    }
  },
  props: {
    params: {
      className: String,
      loadingProcess: Number,
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
