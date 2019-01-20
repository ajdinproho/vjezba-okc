<template>
  <div id="app">
    <InputFields
      :add-note="addNote"
      :parent-change-method="changeNoteValue"
    />
    <NotesDisplay
      :notes-to-be-displayed="notes"
      :date-time="getDateTime"
    />
  </div>
</template>

<script>
import InputFields from './components/InputFields.vue';
import NotesDisplay from './components/NotesDisplay.vue';

export default {
  name: 'app',
  data() {
    return {
      note: {
        title: '',
        note: '',
        dateTime: '',
      },
      notes: [],
    };
  },
  components: {
    InputFields,
    NotesDisplay,
  },
  methods: {
    getDateTime() {
      const date = new Date();
      const hours = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();
      let dd = date.getDate();
      let mm = date.getMonth() + 1;
      const yyyy = date.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      return `${dd}.${mm}.${yyyy}. - ${hours}:${mins}:${secs}`;
    },
    addNote() {
      this.$store.dispatch('addNote', this.note);
    },
    changeNoteValue(newNote) {
      this.note = newNote;
    },
  },
  mounted() {
    this.notes = JSON.parse(window.localStorage.getItem('notes')) || [];
  },
};
</script>

<style lang="scss">
body{
  background: url(/src/assets/tigar.jpg);
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
