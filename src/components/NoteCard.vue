<template>
  <div>
    <div class="input-wrap">
      <span>{{ singleNote.title }}</span>
    </div>
    {{singleNote.note}}
    {{singleNote.date}}
    <div v-on:click="parentRemoveMethod(index)"> X </div>
    <div v-on:click="editNote"> Edit </div>
  </div>
</template>
<script>
export default {
  name: 'NoteCard',
  props: {
    singleNote: {
      type: Object,
      required: true,
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
  index: {
    type: Number,
    required: true,
  },
  methods: {
    editNote() {
      this.updateNote({
        title: this.singleNote.title,
        note: this.singleNote.note,
        index: this.index,
      });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
