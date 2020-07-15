<template>
  <div class="settings">
    <h1>
      <a href="#/">
        <i class="fas fa-angle-left"></i>
      </a>

      Settings
    </h1>

    <div class="settings__fieldset">
      <h4>
        Difficulty
      </h4>

      <div class="settings__radios">
        <label for="easy">
          <input
            id="easy"
            type="radio"
            value="3"
            :checked="(cardCount == 3)"
            @change="updateCount(3)">
          <span>Easy</span>
        </label>

        <label for="medium">
          <input
            id="medium"
            type="radio"
            value="4"
            :checked="(cardCount == 4)"
            @change="updateCount(4)">
          <span>Medium</span>
        </label>

        <label for="hard">
          <input
            id="hard"
            type="radio"
            value="6"
            :checked="(cardCount == 6)"
            @change="updateCount(6)">
          <span>Hard</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Settings',
    computed: {
      // mix the getters into computed with object spread operator
      ...mapState([
        'cardCount'
      ])
    },
    methods: {
      ...mapMutations([
        'changeCards'
      ]),
      updateCount (v) {
        this.changeCards(v);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "../styles/mixins/colors";

  .settings {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-left: 15px;

    h1 a {
      margin-right: 15px;
    }

    &__fieldset {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }

    &__fieldset label {
      margin-bottom: 5px;
    }

    &__radios {
      display: flex;
      flex-direction: column;
    }

    &__radios span {
      margin-left: 8px;
    }
  }
</style>
