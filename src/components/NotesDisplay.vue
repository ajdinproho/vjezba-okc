<template>
  <div>
    <NoteCard
      v-for="(singleNote, index) in notesToBeDisplayed"
      :key="index"
      :single-note="singleNote"
      :parent-remove-method="parentRemoveMethod"
      :update-note="updateNote">
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
    updateNote: {
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
