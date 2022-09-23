<template>
  <div class="newReply">
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
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
  margin-bottom: 5px;
}
</style>
