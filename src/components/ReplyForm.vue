<template>
  <div class="newReply">
    <h2>add reply</h2>
    <my-text-area></my-text-area>
    <my-button>add</my-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.newReply {
  width: 100%;
  max-width: 400px;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
  margin-bottom: 5px;
  position: absolute;
}
h2 {
  margin: 0;
}
</style>
