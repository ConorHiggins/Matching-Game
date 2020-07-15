<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
      <Board/>
      <Controls
        v-if="showSettings"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Board from './components/Board.vue'
  import Controls from './components/Controls.vue'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'App',
    components: {
      Header,
      Board,
      Controls,
    },
    methods: {
      ...mapActions([
        'toggleSettings'
      ])
    },
    computed: {
      ...mapGetters([
        'showSettings'
      ])
    }
  }
</script>

<style lang="scss">
  body,html {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Quicksand', sans-serif;
    height: 100%;
  }

  .wrapper {
    display: flex;
    padding: 15px;
    height: 100%;
  }
</style>
