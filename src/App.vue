<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Button ctaText="CTA from app 111" name="name" type="submit" @click="clickMe" @focus="logFocus" /> -->
    <section>
        <b-button @click="clickMe" @focus="logFocus">Click Me</b-button>
        <div class="buttons">
            <b-button type="is-primary">Primary</b-button>
            <b-button type="is-success">Success</b-button>
            <b-button type="is-danger">Danger</b-button>
            <b-button type="is-warning">Warning</b-button>
          </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { BButton } from './components/button'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BButton
  },
  methods: {
      clickMe() {
          alert('Hello!! I am Clicked!!')
      },
      logFocus() {
        console.log('Hello!! you focused on me');
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
