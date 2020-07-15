<template>
  <div class="timer">
    Tick Tock mofo
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    computed: {
      // mix the getters into computed with object spread operator
      ...mapState([
        'running'
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .timer {
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
