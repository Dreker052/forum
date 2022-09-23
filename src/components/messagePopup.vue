<template>
  <div class="message"><slot></slot></div>
</template>

<style scoped>
.message {
  position: absolute;
  width: 100%;
  max-width: 400px;
  background-color: white;
  top: 5px;
  right: 5px;
  padding: 10px;
  border: 3px solid lightblue;
  border-radius: 5px;
}
</style>
