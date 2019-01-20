<template>
  <div>
    <div id="card">
      <div id="title">
        <span>{{ singleNote.title }}</span>
      </div>
      <div id="text" v-if="!editing">
        <p> {{ singleNote.note }} </p>
        <p> {{ singleNote.dateTime }} </p>
      </div>
      <div v-if="editing">
        <textarea v-model="tempValue" name="editText" id="editText" cols="30" rows="10"></textarea>
      </div>
      <div>
        <button id="removeButton" @click="RemoveMethod(Index)"> Remove </button>
        <button @click="enableEditing"> Edit </button>
        <button id="saveButon" v-if="editing" @click="saveEdit" > Save </button>
      </div>
    </div>
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
    Index: {
      type: Number,
      required: false,
      default: -1,
    },
    setDateTime: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      value: this.singleNote.note,
      tempValue: null,
      editing: false,
    };
  },
  methods: {
    enableEditing() {
      this.tempValue = this.value;
      this.editing = true;
    },
    disableEditing() {
      this.tempValue = null;
      this.editing = false;
    },
    saveEdit() {
      this.value = this.tempValue;
      this.singleNote.note = this.value;
      this.singleNote.dateTime = this.setDateTime();
      this.disableEditing();
    },
    RemoveMethod(Index) {
      this.$store.dispatch('removeMethod', Index);
    },
  },
};
</script>

<style lang="scss" scoped>
#card{
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: firebrick;
  width: 350px;
  min-height: 300px;
  height: auto;
  color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0.92;
}
#title{
  padding-top: 10px;
  background-color: rgb(119, 18, 18);
  height: 30px;
  width: 350px;
  color: black;
  font-weight: bold;
}
button{
  width: 40px;
  height: 25px;
  border: none;
  background-color: black;
  color: firebrick;
  margin-right: 10px;
  float: right;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
#removeButton{
  width: 65px;
}
#editText{
  background-color: firebrick;
  color: black;
  width: 345px;
  outline: none;
  resize: none;
  word-wrap: break-word;
}
#text{
  min-height: 250px;
}
#saveButon{
  width: 65px;
}
</style>
