<template>
  <div id="app">
    <InputFields
      :add-note="addNote"
      :parent-change-method="changeNoteValue"
      :note-for-update="noteForUpdate" />
    <NotesDisplay
      :notes-to-be-displayed="notes"
      :parent-remove-method="removeNote"
      :update-note="updateNote" />
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
      },
      notes: [],
      noteForUpdate: {},
    };
  },
  components: {
    InputFields,
    NotesDisplay,
  },
  methods: {
    addNote() {
      console.log(this.$store);
      this.$store.dispatch('dodajNote', this.note);
      /* if (!this.noteForUpdate.title === undefined) {
        this.notes.splice(this.noteForUpdate.index, {
          title: this.title,
          note: this.note,
        });
        this.noteForUpdate = {};
        return;
      }
      this.notes.push(this.note);
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.note = {
        title: '',
        note: '',
      }; */
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    changeNoteValue(newNote) {
      this.note = newNote;
    },
    updateNote(noteData) {
      this.noteForUpdate = noteData;
    },
  },
  mounted() {
    this.notes = JSON.parse(window.localStorage.getItem('notes')) || [];
    localStorage.removeItem('notes');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
