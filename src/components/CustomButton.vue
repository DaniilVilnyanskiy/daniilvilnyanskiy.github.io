<template>
  <button @click="onClick" class="btn" :class="[params.className,{'btn-disable':params.loadingProcess}]">
    <span
      class="btn-span-large"
      v-if="params.loadingProcess == false"
    >Отправить</span>
    <LoadingProcess v-else />
  </button>
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
    onClick (e) {
      this.$emit("previewButtonWasClicked", e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
