<template>
  <div
    @click="click"
    :class="[
      'card', 'card--'+cardState
    ]">
    <span class="card__cover"></span>

    <span class="card__content">
      <img :src="item.avatar">
    </span>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Card',
    data: function(){
      return {
        cardState: 'hidden'
      }
    },
    props: [
      'item'
    ],
    computed: {
      ...mapState([
        'selection',
        'matched'
      ])
    },
    methods: {
      ...mapActions([
        'updateSelection',
        'clearSelection',
        'updateMatched'
      ]),
      click: function(){
        // if the card is already matched
        //    then ignore
        if (this.cardState == 'matched'){
          return;
        }

        // if the card is visible,
        //    then deselect it in the store
        //    and set cardStatus to hidden
        if (this.cardState == 'visible'){
          this.cardState = "hidden";
          this.clearSelection(this.item.key);
        }

        // if the card is hidden
        //     then check the store for an exising key
        //     and mark as matched if it exist
        //     OR reset the selection if another was previously selected
        else {
          this.cardState = "visible";
          if (this.selection.indexOf(this.item.key) > -1 ){
            this.updateMatched(this.item.key);
          }
          else {
            this.updateSelection(this.item.key);
            // this.clearSelection();
          }
        }
      }
    },

    watch: {
      selection(newValue) {
        if (this.cardState === 'matched') {
          return;
        }

        if (newValue.length >= 2){
          setTimeout(() => {
            this.cardState = 'hidden'
            this.clearSelection();
          }, 500)
        }
      },
      matched(newValue) {
        if (newValue.indexOf(this.item.key) > -1) {
          this.cardState = 'matched';
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "../styles/mixins/colors";
  @import "../styles/mixins/animations";

  $self: ".card";
  .card {
    width: auto;
    height: 200px;
    border-radius: 4px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $card--bg;
    position: relative;
    cursor: pointer;
    border: 4px solid $card--border;

    &__cover {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card--visible,
  .card--matched {
    #{$self}__cover {
      display: none;
    }

    #{$self}__content {
      display: flex;
    }
  }

  .card--matched {
    @include rotate-out;
  }

  .card--visible {
    @include pulse;
  }
</style>
