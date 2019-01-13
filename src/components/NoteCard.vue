<template>
  <div>
    <div class="input-wrap">
      <span>{{ singleNote.title }}</span>
    </div>
    <div v-on:click="parentRemoveMethod(index)"> X </div>
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
  },
};
</script>
<style lang="scss" scoped>

</style>
