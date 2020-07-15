<template>
  <div class="header">
    <h1>
      <a href="#/">
        Find The Pairs
      </a>

      <a
        v-tooltip="'View on Github'"
        href="https://github.com/ConorHiggins/Matching-Game"
        target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </h1>

    <div class="header__controls">
      <span class="header__score">
        Score: {{score}}
      </span>

      <a class="header__action"
        v-tooltip="'Settings'"
        href="#/settings">
        <i class="fas fa-cog"></i>
      </a>
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

    a {
      color: inherit;
      margin-left: 15px;
      text-decoration: none;
    }

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
