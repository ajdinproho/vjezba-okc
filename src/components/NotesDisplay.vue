<template>
  <div>
    <NoteCard id="cardComp"
      v-for="(singleNote, index) in vuexNotes"
      :single-note="singleNote"
      :key="index"
      :Index="index"
      :set-date-time="dateTime"
    />
  </div>
</template>

<script>
import NoteCard from './NoteCard.vue';

export default {
  name: 'NotesDisplay',
  props: {
    dateTime: {
      type: Function,
      required: true,
    },
  },
  components: {
    NoteCard,
  },
  computed: {
    vuexNotes() {
      return this.$store.getters.notes;
    },
  },
};
</script>

<style lang="scss" scoped>
  #cardComp{
    display: block;
    height: auto;
    margin-left: 15px;
    margin-top: 15px;
    width: 30%;
    word-wrap: break-word;
    position: relative;
    padding-left: 650px;
  }
</style>
