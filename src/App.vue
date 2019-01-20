<template>
  <div id="app">
    <InputFields
    />
    <NotesDisplay
    />
  </div>
</template>

<script>
import InputFields from './components/InputFields.vue';
import NotesDisplay from './components/NotesDisplay.vue';

export default {
  name: 'app',
  components: {
    InputFields,
    NotesDisplay,
  },
  mounted() {
    this.notes = JSON.parse(window.localStorage.getItem('notes')) || [];
  },
};
</script>

<style lang="scss">
body{
  background: url(./assets/tigar.jpg) center no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
