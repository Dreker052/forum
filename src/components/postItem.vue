<template>
  <div
    @click="$router.push(`/${$route.params.title}/${post.Id}`)"
    class="postItem"
  >
    <div><strong>Title: </strong>{{ post.Title }}</div>
    <div><strong>Body: </strong>{{ post.Content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.postItem {
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  box-sizing: border-box;
}
</style>
