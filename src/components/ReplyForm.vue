<template>
  <div class="newReply">
    <!-- <h2>add reply</h2> -->
    <my-text-area v-model="reply.Content"></my-text-area>
    <my-button @click="addReply">add reply</my-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reply: {
        Content: "",
      },
    };
  },
  methods: {
    addReply() {
      this.reply.id = Date.now();
      this.$emit("add", this.reply);
      this.reply = {
        Content: "",
      };
    },
  },
};
</script>

<style scoped>
.newReply {
  width: 100%;
  /* max-width: 400px; */
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
  margin-bottom: 5px;
  /* position: absolute; */
}
h2 {
  margin: 0;
  /* margin-bottom: 10px; */
}
</style>
