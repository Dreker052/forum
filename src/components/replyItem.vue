<template>
  <div class="replyItem">
    <div><strong>Body: </strong>{{ reply.Content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    reply: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.replyItem {
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  box-sizing: border-box;
}
</style>
