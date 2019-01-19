<template>
  <div>
    <div class="input-wrap">
      <input type="text" id="title" placeholder="Note title"
             v-model="noteTitle" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
     <textarea id="noteValue" v-model="noteVal" @keyup="changeNote" placeholder="Type your note"></textarea>
    </div>
    <div class="input-wrap">
      <button @click="add">Add note</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputFields',
  data() {
    return {
      noteVal: '',
      noteTitle: '',
    };
  },
  props: {
    addNote: {
      type: Function,
      required: true,
    },
    parentChangeMethod: {
      type: Function,
      reguired: true,
    },
  },
  methods: {
    add() {
      this.addNote();
      this.noteVal = '';
      this.noteTitle = '';
    },
    changeNote() {
      this.parentChangeMethod({
        title: this.noteTitle,
        note: this.noteVal,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  #title{
    background-color: firebrick;
    color: white;
    width: 500px;
    height: 40px;
    font-size: 20px;
    border: 3px solid black;
    outline: none;
    padding: 6px;
  }
  #noteValue{
    background-color: firebrick;
    color: white;
    padding: 15px 10px;
    font-size: 20px;
    width: 400px;
    border: 3px solid black;
    height: 200px;
    resize: none;
    outline: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .input-wrap {
    padding: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  ::placeholder{
    color: black;
  }
  button{
    font-size: 20px;
    color: black;
    border: 2px solid black;
    background-color: firebrick;
    width: 200px;
    height: 35px;
    outline: none;
  }
</style>
