<template>
  <div>
    <NoteCard
      v-for="(singelNote, index) in notesToBeDisplayed"
      :key="index"
      :single-note="singleNote"
      :parent-remove-method="parentRemoveMethod">
    </NoteCard>
  </div>
</template>
<script>
import NoteCard from './NoteCard.vue';

export default {
  name: 'NotesDisplay',
  props: {
    notesToBeDisplayed: {
      type: Array,
      required: false,
      default: () => [],
    },
    parentRemoveMethod: {
      type: Function,
      required: true,
    },
  },
  components: {
    NoteCard,
  },
};
</script>
<style lang="scss" scoped>

</style>
