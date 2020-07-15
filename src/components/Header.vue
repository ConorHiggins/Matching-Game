<template>
  <div class="header">
    <h1>Find The Pairs</h1>

    <div class="header__controls">
      <span class="header__action">

      </span>

      <span class="header__score">
        Score: {{score}}
      </span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    computed: {
      // mix the getters into computed with object spread operator
      ...mapState([
        'cardCount',
        'animationStyle',
        'score',
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: #ff3d00;
    color: white;

    &__score {
      height: 48px;
      min-width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #dd2c00;
      color: white;
      padding: 0 15px;
      border-radius: 8px;
      font-size: 24px;
    }
  }

  h1 {
    margin: 0;
  }
</style>
