<template>
  <div class="header">
    <h1>Find The Pairs</h1>

    <div class="header__controls">
      <span class="header__score">
        Score: {{score}}
      </span>

      <span class="header__action"
        @click="toggleSettings">
        <i class="fas fa-cog"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Header',
    methods: {
      ...mapActions([
        'toggleSettings'
      ])
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapState([
        'cardCount',
        'score',
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/mixins/colors";

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: $header--bg;
    color: white;

    &__controls {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__action {
      font-size: 24px;
      padding: 0 15px;
      cursor: pointer;
    }

    &__score {
      height: 48px;
      min-width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      color: $header-score--bg;
      padding: 0 30px;
      border-radius: 8px;
      font-size: 24px;
      font-weight: 600;
    }
  }

  h1 {
    margin: 0;
  }
</style>
