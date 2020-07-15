<template>
  <div class="board">
    <div class="board__overlay"
      v-if="(gameStatus !== 'active')">
      <h1>
        Well Done!
      </h1>
      <h2>
        Score: {{score}}
      </h2>

      <a href="javascript:;"
        @click="restart">
        Play Again
      </a>
    </div>
    <div class="board__cards"
      v-if="(gameStatus == 'active')">
      <div
        v-for="(c, i) in visibleCards"
        :key="i">
        <Card
          :item="c"
          :index="i"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Card from '../components/Card.vue'

  export default {
    name: 'Board',
    computed: {
      // mix the getters into computed with object spread operator
      ...mapState([
        'score',
        'cardCount',
        'matched',
        'selection'
      ]),
      visibleCards: (vm) => {
        const baseValues = Array.from(Array(vm.cardCount/1).keys());

        const mapped = baseValues.map((v) => {
          return {
            key: v,
            avatar: `https://api.adorable.io/avatars/128/match${v}.png`
          }
        });

        const shuffleArray = arr => arr
          .map(a => [Math.random(), a])
          .sort((a, b) => a[0] - b[0])
          .map(a => a[1]);

        return shuffleArray([].concat(mapped, mapped));
      },
      gameStatus: (vm) => {
        if (vm.cardCount == vm.matched.length) {
          return 'complete';
        }
        else {
          return 'active';
        }
      }
    },
    components: {
      Card,
    },
    methods: {
      ...mapActions({
        decrease: 'decreaseScore',
        restart: 'resetGame'
      })
    },
    watch: {
      selection(newValue) {
        if (newValue.length >= 2){
          console.log('decrease it!');
          setTimeout(() => {
            this.decrease(5);
          }, 500)
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    margin: 0;
  }

  .board {
    height: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    &__overlay {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__cards {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    }
  }
</style>
